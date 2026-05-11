import { NextRequest, NextResponse } from "next/server";
import { sbAdmin } from "@/lib/supabase";
import { getClientIp, looksLikeBot } from "@/lib/ip";
import { normalizePhone, validateName, validateAge } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_FILL_MS = 2500;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_SOFT = 3;
const RATE_LIMIT_HARD = 5;

const ALLOWED_JOBS = ["무직자", "직장인", "개인사업자", "법인사업자"];

function bad(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") return bad("INVALID");

    const { name, phone, age, job, agree, hp, ts } = body as Record<string, unknown>;

    // Honeypot — silently accept (don't tell the bot it failed)
    if (typeof hp === "string" && hp.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Time-on-page guard
    const elapsed = typeof ts === "number" ? Date.now() - ts : 0;
    if (!ts || elapsed < MIN_FILL_MS) return bad("TOO_FAST");

    // Agreement is required
    if (agree !== true) return bad("INVALID");

    // Field-level validation with specific error codes for UX
    const cleanName = validateName(name);
    if (!cleanName) return bad("INVALID_NAME");

    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone) return bad("INVALID_PHONE");

    const validAge = validateAge(age);
    if (validAge === null) return bad("INVALID_AGE");

    if (typeof job !== "string" || !ALLOWED_JOBS.includes(job)) {
      return bad("INVALID_JOB");
    }

    // Bot user-agent
    const ua = req.headers.get("user-agent");
    if (looksLikeBot(ua)) return bad("BLOCKED", 403);

    const ip = getClientIp(req);
    const sb = sbAdmin();

    // IP blocklist
    const { data: blocked } = await sb
      .from("blocked_ips")
      .select("ip")
      .eq("ip", ip)
      .maybeSingle();
    if (blocked) return bad("BLOCKED", 403);

    // Duplicate phone — already applied previously (canonical match)
    const { data: existing } = await sb
      .from("applications")
      .select("id")
      .eq("phone", normalizedPhone)
      .limit(1)
      .maybeSingle();
    if (existing) return bad("DUPLICATE_PHONE", 409);

    // Per-IP rate limit in the last hour
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
      return bad("BLOCKED", 403);
    }
    if ((count ?? 0) >= RATE_LIMIT_SOFT) {
      return bad("RATE_LIMIT", 429);
    }

    const { error } = await sb.from("applications").insert({
      name: cleanName,
      phone: normalizedPhone,
      age: validAge,
      job,
      ip,
      user_agent: ua?.slice(0, 300) ?? null,
    });

    if (error) return bad("DB", 500);
    return NextResponse.json({ ok: true });
  } catch {
    return bad("SERVER", 500);
  }
}
