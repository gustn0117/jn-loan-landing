"use client";

import { useState, useRef, FormEvent, useEffect } from "react";

type Form = {
  name: string;
  phone: string;
  age: string;
  job: string;
  agree: boolean;
  hp: string;
};

const initial: Form = {
  name: "",
  phone: "",
  age: "",
  job: "",
  agree: false,
  hp: "",
};

export default function ApplyForm() {
  const [form, setForm] = useState<Form>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const loadedAt = useRef<number>(0);

  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!form.agree) {
      setError("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    if (!form.name.trim() || !form.phone.trim() || !form.age || !form.job.trim()) {
      setError("모든 필수 정보를 입력해주세요.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          age: form.age,
          job: form.job.trim(),
          agree: form.agree,
          hp: form.hp,
          ts: loadedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setSubmitted(true);
      } else if (res.status === 429) {
        setError("짧은 시간에 너무 많은 신청이 접수되었습니다. 잠시 후 다시 시도해주세요.");
      } else if (res.status === 403) {
        setError("일시적으로 신청이 제한되었습니다. 직접 전화로 문의해주세요.");
      } else if (json.error === "TOO_FAST") {
        setError("입력에 시간이 너무 짧습니다. 다시 시도해주세요.");
      } else {
        setError("신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  return (
    <section id="apply" className="relative bg-[#fafaf7] py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="kicker">
              <span>04</span> Get Started
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest text-ink-900 sm:text-[36px] lg:text-[44px]">
              지금 신청하세요
            </h2>
          </div>
          <p className="text-[14px] leading-[1.85] text-ink-700 lg:col-span-5">
            간단한 정보만 입력하면 전문가 상담이 시작됩니다. 입력 정보는 상담
            직후 안전하게 파기됩니다.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[rgba(10,16,32,0.08)] bg-white shadow-card sm:rounded-3xl">
          <div className="grid lg:grid-cols-12">
            <aside className="relative isolate overflow-hidden bg-ink-950 p-7 text-white sm:p-10 lg:col-span-5 lg:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(500px 300px at 0% 0%, rgba(217,187,107,0.18), transparent 60%)",
                }}
              />

              <span className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
                Free Consultation
              </span>
              <h3 className="mt-4 font-serif text-[22px] font-medium leading-[1.3] tracking-tight sm:text-[26px]">
                상담은 무료이며,
                <br />
                신용점수에 영향을 주지 않습니다.
              </h3>

              <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                <Bullet label="상담 비용" value="무료 (100% 무료)" />
                <Bullet label="신용점수" value="조회 영향 없음" />
                <Bullet label="개인정보" value="상담 후 즉시 파기" />
                <Bullet label="처리 방식" value="전문가 1:1 상담" />
              </ul>

              <div className="mt-10 border-t border-white/10 pt-6 text-[12px] text-white/55 sm:mt-12">
                <p>등록번호 2023-광주광산-0014</p>
                <p className="mt-1">사업자등록번호 564-88-02984</p>
              </div>
            </aside>

            <div className="p-7 sm:p-10 lg:col-span-7 lg:p-14">
              {submitted ? (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center sm:min-h-[420px]">
                  <svg
                    viewBox="0 0 60 60"
                    fill="none"
                    aria-hidden
                    className="h-14 w-14 text-gold-500"
                  >
                    <circle cx="30" cy="30" r="29" stroke="currentColor" strokeWidth="1" />
                    <path d="M20 31 L27 38 L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4 className="mt-6 font-serif text-[22px] font-medium tracking-tight text-ink-900 sm:text-[26px]">
                    상담 신청이 접수되었습니다
                  </h4>
                  <p className="mt-3 max-w-sm text-[13.5px] leading-[1.85] text-ink-700 sm:text-[14px]">
                    빠른 시간 내에 전문 상담사가 연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setForm(initial);
                      setSubmitted(false);
                      loadedAt.current = Date.now();
                    }}
                    className="mt-8 text-[13px] font-medium text-gold-500 underline-offset-4 hover:underline"
                  >
                    새 신청서 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="website">Website (do not fill)</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.hp}
                      onChange={(e) => update("hp", e.target.value)}
                    />
                  </div>

                  <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-x-10">
                    <Field
                      id="name"
                      label="이름"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                    />
                    <Field
                      id="phone"
                      label="연락처"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                    />
                    <Field
                      id="age"
                      label="나이"
                      type="number"
                      inputMode="numeric"
                      value={form.age}
                      onChange={(v) => update("age", v)}
                    />
                    <Field
                      id="job"
                      label="직장"
                      value={form.job}
                      onChange={(v) => update("job", v)}
                    />
                  </div>

                  <label className="mt-8 flex cursor-pointer items-start gap-3 border-t border-[rgba(10,16,32,0.08)] pt-6 sm:mt-10">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => update("agree", e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-[rgba(10,16,32,0.3)] text-gold-500 accent-[#b58a33]"
                    />
                    <span className="text-[12.5px] leading-[1.7] text-ink-700 sm:text-[13px]">
                      개인정보 수집 및 이용에 동의합니다 (필수){" "}
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gold-500 underline-offset-4 hover:underline"
                      >
                        [개인정보처리방침 보기]
                      </a>
                    </span>
                  </label>

                  {error && (
                    <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[13px] text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-luxe btn-luxe-block mt-6 disabled:opacity-60"
                  >
                    <span>{submitting ? "신청 중…" : "상담 신청하기"}</span>
                    {!submitting && <span className="btn-arrow">→</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "text" | "tel" | "numeric" | "email";
}) {
  return (
    <div className="field">
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <label htmlFor={id}>
        {label} <span className="text-gold-500">*</span>
      </label>
    </div>
  );
}

function Bullet({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-2.5 block h-px w-6 shrink-0 bg-gold-300" />
      <div className="flex-1">
        <p className="text-[10.5px] uppercase tracking-[0.18em] text-white/45">
          {label}
        </p>
        <p className="mt-1 text-[13px] font-medium text-white sm:text-[13.5px]">
          {value}
        </p>
      </div>
    </li>
  );
}
