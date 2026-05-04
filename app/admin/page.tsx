"use client";

import { useEffect, useState, FormEvent } from "react";

type Application = {
  id: number;
  name: string;
  phone: string;
  age: number | null;
  job: string | null;
  ip: string | null;
  user_agent: string | null;
  status: string;
  notes: string | null;
  created_at: string;
};

type Blocked = { ip: string; reason: string | null; blocked_at: string };

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [apps, setApps] = useState<Application[]>([]);
  const [blocked, setBlocked] = useState<Blocked[]>([]);
  const [tab, setTab] = useState<"apps" | "blocked">("apps");
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "spam">("all");
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/applications", { cache: "no-store" });
    if (res.status === 401) {
      setAuthed(false);
      setLoading(false);
      return;
    }
    const json = await res.json();
    if (json.ok) {
      setApps(json.applications);
      setBlocked(json.blocked);
      setAuthed(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      setPw("");
      fetchData();
    } else {
      setError("비밀번호가 올바르지 않습니다.");
    }
  };

  const onLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setApps([]);
    setBlocked([]);
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch("/api/admin/applications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchData();
  };

  const updateNotes = async (id: number, notes: string) => {
    await fetch("/api/admin/applications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, notes }),
    });
  };

  const blockIp = async (ip: string, reason?: string) => {
    if (!confirm(`${ip} 를 차단할까요?`)) return;
    await fetch("/api/admin/block", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, reason: reason || "관리자 수동 차단" }),
    });
    fetchData();
  };

  const unblockIp = async (ip: string) => {
    if (!confirm(`${ip} 차단을 해제할까요?`)) return;
    await fetch("/api/admin/unblock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip }),
    });
    fetchData();
  };

  const deleteApp = async (id: number) => {
    if (!confirm("정말 삭제할까요? (복구 불가)")) return;
    await fetch("/api/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a1020] px-4">
        <form
          onSubmit={onLogin}
          className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0f1530] p-8 shadow-2xl"
        >
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
            JN Loan Admin
          </p>
          <h1 className="mt-3 font-serif text-2xl font-medium text-white">
            관리자 로그인
          </h1>
          <p className="mt-2 text-[13px] text-white/60">
            상담 신청 관리 페이지입니다.
          </p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호"
            className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold-300 focus:outline-none"
            autoFocus
          />
          {error && (
            <p className="mt-3 text-[12.5px] text-red-300">{error}</p>
          )}
          <button type="submit" className="btn-luxe btn-luxe-block mt-5">
            <span>로그인</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    );
  }

  const ipCounts = new Map<string, number>();
  apps.forEach((a) => {
    if (a.ip) ipCounts.set(a.ip, (ipCounts.get(a.ip) || 0) + 1);
  });

  const filtered = apps
    .filter((a) => (filter === "all" ? true : a.status === filter))
    .filter((a) => {
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.phone.includes(q) ||
        (a.ip || "").includes(q) ||
        (a.job || "").toLowerCase().includes(q)
      );
    });

  const stats = {
    total: apps.length,
    new: apps.filter((a) => a.status === "new").length,
    contacted: apps.filter((a) => a.status === "contacted").length,
    spam: apps.filter((a) => a.status === "spam").length,
    blocked: blocked.length,
  };

  return (
    <div className="min-h-screen bg-[#0a1020] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a1020]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-4 sm:px-8">
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
              JN Loan Admin
            </p>
            <h1 className="mt-0.5 font-serif text-lg font-medium sm:text-xl">
              상담 신청 관리
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchData}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] hover:bg-white/10"
            >
              새로고침
            </button>
            <button
              onClick={onLogout}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] hover:bg-white/10"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <Stat label="전체" value={stats.total} />
          <Stat label="신규" value={stats.new} accent />
          <Stat label="연락완료" value={stats.contacted} />
          <Stat label="스팸" value={stats.spam} />
          <Stat label="차단 IP" value={stats.blocked} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
          <TabBtn active={tab === "apps"} onClick={() => setTab("apps")}>
            신청 목록
          </TabBtn>
          <TabBtn active={tab === "blocked"} onClick={() => setTab("blocked")}>
            차단 IP
          </TabBtn>
          {loading && (
            <span className="ml-auto text-[12px] text-white/40">로딩 중…</span>
          )}
        </div>

        {tab === "apps" && (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <FilterBtn active={filter === "all"} onClick={() => setFilter("all")}>
                전체
              </FilterBtn>
              <FilterBtn active={filter === "new"} onClick={() => setFilter("new")}>
                신규
              </FilterBtn>
              <FilterBtn
                active={filter === "contacted"}
                onClick={() => setFilter("contacted")}
              >
                연락완료
              </FilterBtn>
              <FilterBtn
                active={filter === "spam"}
                onClick={() => setFilter("spam")}
              >
                스팸
              </FilterBtn>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="이름·전화·IP 검색"
                className="ml-auto w-full max-w-xs rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] placeholder:text-white/30 focus:border-gold-300 focus:outline-none sm:w-auto"
              />
            </div>

            <div className="mt-4 space-y-3">
              {filtered.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-[13.5px] text-white/50">
                  표시할 신청이 없습니다.
                </div>
              )}
              {filtered.map((a) => {
                const ipCount = a.ip ? ipCounts.get(a.ip) || 0 : 0;
                const isBlocked = blocked.some((b) => b.ip === a.ip);
                return (
                  <article
                    key={a.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-serif text-lg font-medium">
                            {a.name}
                          </h3>
                          <a
                            href={`tel:${a.phone}`}
                            className="text-[13.5px] text-gold-300 underline-offset-4 hover:underline"
                          >
                            {a.phone}
                          </a>
                          <StatusPill status={a.status} />
                          {ipCount > 1 && (
                            <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-amber-300">
                              동일 IP {ipCount}회
                            </span>
                          )}
                          {isBlocked && (
                            <span className="rounded-full bg-red-400/10 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-red-300">
                              차단됨
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[12.5px] text-white/55">
                          {new Date(a.created_at).toLocaleString("ko-KR")} ·{" "}
                          {a.age ? `${a.age}세` : "나이 미입력"} ·{" "}
                          {a.job || "직장 미입력"}
                        </p>
                        <p className="mt-1 break-all font-mono text-[11.5px] text-white/40">
                          IP: {a.ip || "-"}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {a.status !== "contacted" && (
                          <ActionBtn
                            onClick={() => updateStatus(a.id, "contacted")}
                          >
                            연락완료
                          </ActionBtn>
                        )}
                        {a.status !== "spam" && (
                          <ActionBtn onClick={() => updateStatus(a.id, "spam")}>
                            스팸 표시
                          </ActionBtn>
                        )}
                        {a.status !== "new" && (
                          <ActionBtn onClick={() => updateStatus(a.id, "new")}>
                            신규로
                          </ActionBtn>
                        )}
                        {a.ip && !isBlocked && (
                          <ActionBtn
                            danger
                            onClick={() =>
                              blockIp(a.ip!, `신청 #${a.id}에서 차단`)
                            }
                          >
                            IP 차단
                          </ActionBtn>
                        )}
                        <ActionBtn danger onClick={() => deleteApp(a.id)}>
                          삭제
                        </ActionBtn>
                      </div>
                    </div>
                    <NoteField
                      initial={a.notes || ""}
                      onSave={(v) => updateNotes(a.id, v)}
                    />
                  </article>
                );
              })}
            </div>
          </>
        )}

        {tab === "blocked" && (
          <div className="mt-4 space-y-2">
            {blocked.length === 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-[13.5px] text-white/50">
                차단된 IP가 없습니다.
              </div>
            )}
            {blocked.map((b) => (
              <div
                key={b.ip}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[14px] text-white">{b.ip}</p>
                  <p className="mt-1 text-[12px] text-white/55">
                    {b.reason || "사유 없음"} ·{" "}
                    {new Date(b.blocked_at).toLocaleString("ko-KR")}
                  </p>
                </div>
                <ActionBtn onClick={() => unblockIp(b.ip)}>차단 해제</ActionBtn>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-[10.5px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </p>
      <p
        className={`mt-1.5 font-serif text-2xl font-medium ${
          accent ? "text-gold-300" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
        active
          ? "bg-white text-ink-900"
          : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-[12.5px] transition ${
        active
          ? "bg-gold-300 text-ink-900"
          : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function ActionBtn({
  onClick,
  children,
  danger = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-[11.5px] font-medium transition ${
        danger
          ? "border-red-400/30 bg-red-400/5 text-red-200 hover:bg-red-400/15"
          : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    new: { label: "신규", cls: "bg-gold-300/15 text-gold-300" },
    contacted: { label: "연락완료", cls: "bg-emerald-400/15 text-emerald-300" },
    spam: { label: "스팸", cls: "bg-red-400/15 text-red-300" },
  };
  const m = map[status] || { label: status, cls: "bg-white/10 text-white/60" };
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider ${m.cls}`}
    >
      {m.label}
    </span>
  );
}

function NoteField({
  initial,
  onSave,
}: {
  initial: string;
  onSave: (v: string) => void;
}) {
  const [val, setVal] = useState(initial);
  const [saved, setSaved] = useState(false);
  const dirty = val !== initial;
  return (
    <div className="mt-3">
      <textarea
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          setSaved(false);
        }}
        placeholder="메모 추가…"
        rows={2}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] text-white placeholder:text-white/30 focus:border-gold-300 focus:outline-none"
      />
      <div className="mt-2 flex items-center justify-end gap-2">
        {saved && <span className="text-[11.5px] text-emerald-300">저장됨</span>}
        {dirty && (
          <button
            onClick={() => {
              onSave(val);
              setSaved(true);
            }}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11.5px] font-medium text-white/80 hover:bg-white/10"
          >
            메모 저장
          </button>
        )}
      </div>
    </div>
  );
}
