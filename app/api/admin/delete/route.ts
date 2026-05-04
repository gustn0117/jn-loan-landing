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
  if (!body || typeof body.id !== "number") {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
  }
  const sb = sbAdmin();
  const { error } = await sb.from("applications").delete().eq("id", body.id);
  if (error) return NextResponse.json({ ok: false, error: "DB" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
