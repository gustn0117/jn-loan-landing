import { NextRequest, NextResponse } from "next/server";
import { sbAdmin } from "@/lib/supabase";
import { getClientIp, looksLikeBot } from "@/lib/ip";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_FILL_MS = 2500;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_SOFT = 3;
const RATE_LIMIT_HARD = 5;

const PHONE_RE = /^[0-9\-+\s()]{9,20}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
    }

    const { name, phone, age, job, agree, hp, ts } = body as Record<string, unknown>;

    if (typeof hp === "string" && hp.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const elapsed = typeof ts === "number" ? Date.now() - ts : 0;
    if (!ts || elapsed < MIN_FILL_MS) {
      return NextResponse.json({ ok: false, error: "TOO_FAST" }, { status: 400 });
    }

    if (
      typeof name !== "string" ||
      typeof phone !== "string" ||
      !name.trim() ||
      !phone.trim() ||
      !PHONE_RE.test(phone.trim()) ||
      agree !== true
    ) {
      return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
    }
    if (name.length > 40 || (typeof job === "string" && job.length > 80)) {
      return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
    }

    const ua = req.headers.get("user-agent");
    if (looksLikeBot(ua)) {
      return NextResponse.json({ ok: false, error: "BLOCKED" }, { status: 403 });
    }

    const ip = getClientIp(req);
    const sb = sbAdmin();

    const { data: blocked } = await sb
      .from("blocked_ips")
      .select("ip")
      .eq("ip", ip)
      .maybeSingle();
    if (blocked) {
      return NextResponse.json({ ok: false, error: "BLOCKED" }, { status: 403 });
    }

    const since = new Date(Date.now() - RATE_WINDOW_MS).toISOString();
    const { count } = await sb
      .from("applications")
      .select("id", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", since);

    if ((count ?? 0) >= RATE_LIMIT_HARD) {
      await sb.from("blocked_ips").upsert({
        ip,
        reason: `자동 차단 — 1시간 내 ${RATE_LIMIT_HARD}회 이상 시도`,
      });
      return NextResponse.json({ ok: false, error: "BLOCKED" }, { status: 403 });
    }
    if ((count ?? 0) >= RATE_LIMIT_SOFT) {
      return NextResponse.json(
        { ok: false, error: "RATE_LIMIT" },
        { status: 429 }
      );
    }

    const ageNum = typeof age === "string" || typeof age === "number" ? Number(age) : null;

    const { error } = await sb.from("applications").insert({
      name: String(name).trim().slice(0, 40),
      phone: String(phone).trim().slice(0, 20),
      age: ageNum && Number.isFinite(ageNum) ? Math.floor(ageNum) : null,
      job: typeof job === "string" ? job.trim().slice(0, 80) : null,
      ip,
      user_agent: ua?.slice(0, 300) ?? null,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "DB" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "SERVER" }, { status: 500 });
  }
}
