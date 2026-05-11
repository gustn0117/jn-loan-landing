import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, makeToken } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const password = body && typeof body.password === "string" ? body.password : "";
  const expected = process.env.ADMIN_PASSWORD || "7955";

  if (password !== expected) {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: ADMIN_COOKIE,
    value: makeToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
