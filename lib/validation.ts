/**
 * Normalize a Korean mobile phone number to digits only.
 * Accepts 010-1234-5678, 01012345678, "010 1234 5678", "+82 10 1234 5678".
 * Returns the canonical "010XXXXYYYY" form, or null if not a valid KR mobile.
 */
export function normalizePhone(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("82")) digits = "0" + digits.slice(2);
  if (/^010\d{8}$/.test(digits)) return digits;
  if (/^01[16789]\d{7,8}$/.test(digits)) return digits;
  return null;
}

/**
 * Korean name validation:
 * - 2 to 8 chars
 * - Hangul or Latin letters and spaces only
 * - Reject monotone single-char repeats ("ㅇㅇㅇ", "aaaa", "111")
 */
export function validateName(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const name = raw.trim();
  if (name.length < 2 || name.length > 8) return null;
  if (!/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z\s]+$/.test(name)) return null;
  // Reject all-same-character repeats
  const stripped = name.replace(/\s/g, "");
  if (stripped.length > 0 && /^(.)\1+$/.test(stripped)) return null;
  return name;
}

export function validateAge(raw: unknown): number | null {
  const n = typeof raw === "string" ? Number(raw) : typeof raw === "number" ? raw : NaN;
  if (!Number.isFinite(n)) return null;
  const age = Math.floor(n);
  if (age < 19 || age > 80) return null;
  return age;
}

/**
 * Format a digit string into 010-XXXX-XXXX (or 010-XXX-XXXX for 10-digit numbers).
 * Used by the client to auto-insert hyphens as the user types.
 */
export function formatPhoneInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length < 4) return digits;
  if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10)
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}
