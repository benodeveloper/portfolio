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
  if (!(await verifyCaptcha(token, ip))) {
    return NextResponse.json({ error: "Captcha check failed. Please try again." }, { status: 403 });
  }

  const url = createResumeLink();
  if (!url) return NextResponse.json({ error: "Résumé downloads are not configured." }, { status: 503 });
  return NextResponse.json({ url }, { headers: { "Cache-Control": "no-store" } });
}
