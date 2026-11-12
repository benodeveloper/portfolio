import type { Metadata } from "next";
import ResumeGate from "@/components/resume-gate";
import SectionHead from "@/components/section-head";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Download Hassan Benadardor's résumé.",
  alternates: { canonical: "/resume" },
  // a gate page has nothing for search engines to index
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  // inlined at build time; the secret key is checked at request time by /api/resume
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const configured = Boolean(siteKey);

  return (
    <section className="pt-24 pb-16">
      <SectionHead num="06" title="Résumé" intro="My full work history, skills and education in one PDF." />
      <div className="card p-6 md:p-8 max-w-xl">
        {configured ? (
          <ResumeGate siteKey={siteKey!} />
        ) : (
          <p className="text-sm leading-relaxed">
            The résumé download is not available right now. Please reach out through the contact page instead.
          </p>
        )}
      </div>
    </section>
  );
}
