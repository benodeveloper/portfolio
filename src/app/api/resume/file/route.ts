import type { NextRequest } from "next/server";
import { isValidResumeLink, loadResume, RESUME_DOWNLOAD_NAME } from "@/lib/resume-access";

/** GET ?exp&sig[&download=1] -> streams the private PDF if the signed link is valid and not expired. */
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams;
  const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" };

  if (!isValidResumeLink(q.get("exp"), q.get("sig"))) {
    return new Response("This link has expired. Please get a new one at /resume.", { status: 403, headers });
  }

  const pdf = await loadResume();
  if (!pdf) return new Response("Résumé not available.", { status: 404, headers });

  const disposition = q.get("download") === "1" ? "attachment" : "inline";
  return new Response(pdf as BodyInit, {
    headers: {
      ...headers,
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${RESUME_DOWNLOAD_NAME}"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
