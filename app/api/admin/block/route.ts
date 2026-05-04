import { NextRequest, NextResponse } from "next/server";
import { sbAdmin } from "@/lib/supabase";
import { ADMIN_COOKIE, verifyToken } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!verifyToken(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ ok: false, error: "UNAUTHORIZED" }, { status: 401 });
  }
  const body = await req.json().catch(() => null);
  if (!body || typeof body.ip !== "string" || !body.ip.trim()) {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
  }
  const sb = sbAdmin();
  const { error } = await sb.from("blocked_ips").upsert({
    ip: body.ip.trim(),
    reason: typeof body.reason === "string" ? body.reason : "관리자 수동 차단",
  });
  if (error) return NextResponse.json({ ok: false, error: "DB" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
