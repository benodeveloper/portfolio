import { NextResponse, type NextRequest } from "next/server";
import { createResumeLink, verifyCaptcha } from "@/lib/resume-access";

/** POST { token } -> verifies the reCAPTCHA, returns a short-lived signed link to the PDF. */
export async function POST(request: NextRequest) {
  let token: unknown;
  try {
    ({ token } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (typeof token !== "string" || token.length < 20 || token.length > 4000) {
    return NextResponse.json({ error: "Please complete the captcha." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  const captcha = await verifyCaptcha(token, ip);
  if (!captcha.ok) {
    const [status, error] =
      captcha.reason === "misconfigured"
        ? [503, "Résumé downloads are temporarily unavailable. Please use the contact page."]
        : captcha.reason === "unreachable"
          ? [502, "Could not reach the captcha service. Please try again in a moment."]
          : [403, "Captcha check failed. Please try again."];
    return NextResponse.json({ error }, { status });
  }

  const url = createResumeLink();
  if (!url) return NextResponse.json({ error: "Résumé downloads are not configured." }, { status: 503 });
  return NextResponse.json({ url }, { headers: { "Cache-Control": "no-store" } });
}
