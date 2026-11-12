import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Hassan Benadardor",
  description: "Get in touch with Hassan Benadardor about web, platform or mobile work.",
};

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16">
      <SectionHead
        num="05"
        title="Contact"
        intro="Tell me what you are building, what is getting in the way, and what a good outcome looks like."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm email={site.email} />

        <aside className="space-y-6">
          <Reveal>
            <div className="card p-6">
              <p className="font-display text-xl uppercase">Direct</p>
              <a className="mt-3 block break-all underline" href={`mailto:${site.email}`}>{site.email}</a>
              <a className="mt-2 block underline" href={site.github} target="_blank" rel="noreferrer">github.com/benodeveloper</a>
              <a className="mt-2 block underline" href={site.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/benodeveloper</a>
              <a className="mt-2 block underline" href={site.resume} target="_blank" rel="noreferrer">Résumé (PDF)</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6">
              <p className="font-display text-xl uppercase">Based in</p>
              <p className="mt-3 text-sm leading-relaxed">Agadir, Morocco. Working with teams remotely.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card p-6">
              <p className="font-display text-xl uppercase">Good fits</p>
              <ul className="mt-3 space-y-2 text-sm list-[square] pl-5">
                <li>Laravel, React and Next.js platforms</li>
                <li>Architecture and technical leadership</li>
                <li>Mobile apps with Flutter</li>
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
