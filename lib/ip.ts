import type { NextRequest } from "next/server";

export function getClientIp(req: NextRequest): string {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "0.0.0.0";
}

const BOT_UA = [
  "bot",
  "crawl",
  "spider",
  "scrap",
  "curl",
  "wget",
  "python-requests",
  "httpclient",
  "go-http-client",
  "okhttp",
  "java/",
  "headless",
  "phantom",
  "puppet",
  "selenium",
];

export function looksLikeBot(ua: string | null): boolean {
  if (!ua) return true;
  const lower = ua.toLowerCase();
  return BOT_UA.some((k) => lower.includes(k));
}
