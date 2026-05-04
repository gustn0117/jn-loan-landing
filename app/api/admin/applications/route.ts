import { NextRequest, NextResponse } from "next/server";
import { sbAdmin } from "@/lib/supabase";
import { ADMIN_COOKIE, verifyToken } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauth() {
  return NextResponse.json({ ok: false, error: "UNAUTHORIZED" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  if (!verifyToken(req.cookies.get(ADMIN_COOKIE)?.value)) return unauth();

  const sb = sbAdmin();
  const [appsRes, blockedRes] = await Promise.all([
    sb
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500),
    sb.from("blocked_ips").select("*").order("blocked_at", { ascending: false }),
  ]);

  if (appsRes.error || blockedRes.error) {
    return NextResponse.json({ ok: false, error: "DB" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    applications: appsRes.data ?? [],
    blocked: blockedRes.data ?? [],
  });
}

export async function PATCH(req: NextRequest) {
  if (!verifyToken(req.cookies.get(ADMIN_COOKIE)?.value)) return unauth();
  const body = await req.json().catch(() => null);
  if (!body || typeof body.id !== "number") {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
  }
  const patch: Record<string, unknown> = {};
  if (typeof body.status === "string") patch.status = body.status;
  if (typeof body.notes === "string") patch.notes = body.notes;

  const sb = sbAdmin();
  const { error } = await sb
    .from("applications")
    .update(patch)
    .eq("id", body.id);
  if (error) return NextResponse.json({ ok: false, error: "DB" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
