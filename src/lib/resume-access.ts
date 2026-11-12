import { createHmac, timingSafeEqual } from "node:crypto";
import path from "node:path";

/*
 * Server-only helpers for the reCAPTCHA-gated résumé.
 * After a successful captcha, the visitor gets a short-lived link signed with HMAC-SHA256.
 * The PDF lives in /private (never served statically, never committed).
 */

export const RESUME_FILE = path.join(process.cwd(), "private", "el-hassan-benadardor-resume.pdf");
export const RESUME_DOWNLOAD_NAME = "Hassan-Benadardor-Resume.pdf";
export const LINK_TTL_SECONDS = 10 * 60;

function secret(): string | null {
  return process.env.RESUME_LINK_SECRET || process.env.RECAPTCHA_SECRET_KEY || null;
}

const sign = (exp: number, key: string) => createHmac("sha256", key).update(`resume:${exp}`).digest("base64url");

/** Returns a path like /api/resume/file?exp=...&sig=..., or null if the server isn't configured. */
export function createResumeLink(): string | null {
  const key = secret();
  if (!key) return null;
  const exp = Math.floor(Date.now() / 1000) + LINK_TTL_SECONDS;
  return `/api/resume/file?exp=${exp}&sig=${sign(exp, key)}`;
}

export function isValidResumeLink(expParam: string | null, sigParam: string | null): boolean {
  const key = secret();
  if (!key || !expParam || !sigParam || !/^\d+$/.test(expParam)) return false;
  const exp = Number(expParam);
  if (exp < Math.floor(Date.now() / 1000)) return false;
  const expected = Buffer.from(sign(exp, key));
  const given = Buffer.from(sigParam);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

/** Verify a reCAPTCHA v2 token with Google. */
export async function verifyCaptcha(token: string, remoteIp?: string | null): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;
  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
