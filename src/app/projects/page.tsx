import type { Metadata } from "next";
import CtaBox from "@/components/cta-box";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { projects, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Hassan Benadardor",
  description: "Platforms, products and open-source projects built by Hassan Benadardor.",
};

function Card({ project }: { project: Project }) {
  const body = (
    <>
      <div className="thumb" aria-hidden="true">
        <span className="glyph">{project.glyph}</span>
        {project.href && <span className="peek">View project</span>}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl uppercase">{project.title}</h2>
          <span className="chip solid shrink-0">{project.context}</span>
        </div>
        <p className="text-sm leading-relaxed">{project.blurb}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
      </div>
    </>
  );

  return project.href ? (
    <a href={project.href} target="_blank" rel="noreferrer" className="card block h-full" aria-label={`Open ${project.title}`}>
      {body}
    </a>
  ) : (
    <div className="card h-full">{body}</div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="pt-24 pb-16">
      <SectionHead
        num="02"
        title="Projects"
        intro="Client platforms, products and side projects. Cards with a link open the live project or repository."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1}>
            <Card project={project} />
          </Reveal>
        ))}
      </div>
      <CtaBox title="Have something in mind?" body="I am always interested in thoughtful product work, especially projects that mix strong interfaces with solid engineering." />
    </section>
  );
}
