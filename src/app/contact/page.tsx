import type { Metadata } from "next";
import InkButton from "@/components/ink-button";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { ogImage, site } from "@/lib/site";

const description =
  "Get in touch with Hassan Benadardor about web platforms, architecture, technical leadership or mobile apps.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { images: [ogImage], title: "Contact", description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16">
      <SectionHead
        num="05"
        title="Contact"
        intro="Tell me what you are building, what is getting in the way, and what a good outcome looks like."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="card p-6 md:p-8 h-full">
            <p className="font-display text-xl font-bold">Email</p>
            <a className="mt-3 block break-all font-display text-2xl md:text-4xl font-extrabold underline decoration-wavy decoration-2 underline-offset-8" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-4 text-sm leading-relaxed">The best way to reach me. Tell me about the project, the timeline and what success looks like.</p>
            <InkButton href={`mailto:${site.email}`} variant="dark" className="mt-6">Write an email</InkButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Based in</p>
            <p className="mt-3 text-sm leading-relaxed">Agadir, Morocco. Working with teams remotely.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Elsewhere</p>
            <a className="mt-3 block underline" href={site.github} target="_blank" rel="noreferrer">github.com/benodeveloper</a>
            <a className="mt-2 block underline" href={site.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/benodeveloper</a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Résumé</p>
            <p className="mt-3 text-sm leading-relaxed">Full work history, skills and education.</p>
            <InkButton href={site.resume} variant="light" className="mt-5">Get the résumé</InkButton>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Good fits</p>
            <ul className="mt-3 space-y-2 text-sm list-[square] pl-5">
              <li>Laravel, React and Next.js platforms</li>
              <li>Architecture and technical leadership</li>
              <li>Mobile apps with Flutter</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
