import type { Metadata } from "next";
import CtaBox from "@/components/cta-box";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience | Hassan Benadardor",
  description: "Where Hassan Benadardor has worked and studied: a timeline from 2015 to today.",
};

export default function ExperiencePage() {
  return (
    <section className="pt-24 pb-16">
      <SectionHead num="04" title="Experience" intro="A timeline of where I have worked and what I have studied." />

      <ol className="relative max-w-3xl mx-auto">
        <div className="tl-track" aria-hidden="true" />
        {experiences.map((exp) => (
          <li key={`${exp.period}-${exp.org}`} className="tl-item relative mb-20 pl-12">
            <div className="dot" aria-hidden="true" />
            <Reveal>
              <span className={`chip mb-2 ${exp.kind === "Education" ? "" : "solid"}`}>{exp.kind}</span>
              <p className="font-display text-sm opacity-60">{exp.period}</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">{exp.role}</h2>
              <p className="mt-2 font-bold">
                {exp.href ? (
                  <a href={exp.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    {exp.org}
                  </a>
                ) : (
                  exp.org
                )}
                <span className="font-normal opacity-60"> · {exp.location}</span>
              </p>
              <ul className="mt-3 max-w-xl space-y-2 text-sm leading-relaxed list-[square] pl-5">
                {exp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <CtaBox
        className="max-w-xl mx-auto text-center"
        title="Let's talk about your next project"
        body="I am available for full-stack web work, platform architecture and technical leadership."
      />
    </section>
  );
}
