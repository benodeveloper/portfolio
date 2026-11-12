import { createHmac, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

/*
 * Server-only helpers for the reCAPTCHA-gated résumé.
 * After a successful captcha, the visitor gets a short-lived link signed with HMAC-SHA256.
 *
 * Where the PDF comes from:
 *  - RESUME_GITHUB_REPO + RESUME_GITHUB_TOKEN set (production / Vercel): fetched from the private
 *    GitHub repository (benodeveloper/portfolio-private) through the GitHub API.
 *  - otherwise (local development): read from /private, which is never served or committed.
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

export type CaptchaResult = { ok: true } | { ok: false; reason: "misconfigured" | "rejected" | "unreachable" };

/** Verify a reCAPTCHA v2 token with Google. Failures are logged server-side with Google's error codes. */
export async function verifyCaptcha(token: string, remoteIp?: string | null): Promise<CaptchaResult> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("[resume] RECAPTCHA_SECRET_KEY is not set.");
    return { ok: false, reason: "misconfigured" };
  }
  if (secretKey === process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    // easy mistake: both keys look alike in the reCAPTCHA console
    console.error("[resume] RECAPTCHA_SECRET_KEY is set to the SITE key. Use the SECRET key from the reCAPTCHA admin console.");
    return { ok: false, reason: "misconfigured" };
  }

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[]; hostname?: string };
    if (data.success === true) return { ok: true };

    const codes = data["error-codes"] ?? [];
    console.warn(`[resume] reCAPTCHA verification failed: ${codes.join(", ") || "no error code"}`);
    // invalid/missing secret = our configuration, anything else = the visitor's token
    const misconfigured = codes.some((c) => c === "invalid-input-secret" || c === "missing-input-secret");
    return { ok: false, reason: misconfigured ? "misconfigured" : "rejected" };
  } catch (e) {
    console.error("[resume] Could not reach reCAPTCHA:", e);
    return { ok: false, reason: "unreachable" };
  }
}

// --- loading the PDF ---

const CACHE_MS = 10 * 60 * 1000;
let cached: { pdf: Uint8Array; at: number } | null = null;

/** Fetch the PDF from the private GitHub repo (raw contents API). */
async function fromGitHub(repo: string, token: string): Promise<Uint8Array | null> {
  const file = process.env.RESUME_GITHUB_PATH || "el-hassan-benadardor-resume.pdf";
  const ref = process.env.RESUME_GITHUB_REF || "main";
  const url = `https://api.github.com/repos/${repo}/contents/${file.split("/").map(encodeURIComponent).join("/")}?ref=${encodeURIComponent(ref)}`;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.raw+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "portfolio-resume",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      // 401 = bad/expired token, 404 = wrong repo/path or token without access to the repo
      console.error(`[resume] GitHub returned ${res.status} for ${repo}/${file}@${ref}. Check RESUME_GITHUB_* settings and the token.`);
      return null;
    }
    return new Uint8Array(await res.arrayBuffer());
  } catch (e) {
    console.error("[resume] Could not reach GitHub:", e);
    return null;
  }
}

/** The résumé PDF bytes, or null if it can't be loaded. Cached in memory for a few minutes. */
export async function loadResume(): Promise<Uint8Array | null> {
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.pdf;

  const repo = process.env.RESUME_GITHUB_REPO;
  const token = process.env.RESUME_GITHUB_TOKEN;
  let pdf: Uint8Array | null = null;
  if (repo && token) {
    pdf = await fromGitHub(repo, token);
  } else {
    try {
      pdf = new Uint8Array(await readFile(RESUME_FILE));
    } catch {
      console.error(`[resume] ${RESUME_FILE} not found, and RESUME_GITHUB_REPO / RESUME_GITHUB_TOKEN are not set.`);
    }
  }

  if (pdf) cached = { pdf, at: Date.now() };
  return pdf;
}
