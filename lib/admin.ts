import crypto from "crypto";

const SECRET = process.env.ADMIN_TOKEN_SECRET || "fallback-secret-change-me";

export const ADMIN_COOKIE = "jn_admin";

export function makeToken() {
  return crypto.createHmac("sha256", SECRET).update("admin-ok").digest("hex");
}

export function verifyToken(token: string | undefined) {
  if (!token) return false;
  const expected = makeToken();
  if (token.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
