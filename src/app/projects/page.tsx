import type { Metadata } from "next";
import { ogImage } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBox from "@/components/cta-box";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { getProjects } from "@/lib/content";

const description = "Client platforms, products and open-source projects built by Hassan Benadardor.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { images: [ogImage], title: "Projects", description, url: "/projects" },
};

export default function ProjectsPage() {
  const projects = getProjects();
  // The section only exists once there is a project (the nav link is hidden too).
  if (projects.length === 0) notFound();

  return (
    <section className="pt-24 pb-16">
      <SectionHead num="02" title="Projects" intro="Client platforms, products and side projects. Open a card for the full story." />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.1}>
            <Link href={`/projects/${project.slug}`} className="card block h-full" aria-label={`Read about ${project.title}`}>
              <div className="thumb" aria-hidden="true">
                <span className="glyph">{project.glyph}</span>
                <span className="peek">Read more</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-bold">{project.title}</h2>
                  <span className="chip solid shrink-0">{project.role}</span>
                </div>
                <p className="text-sm leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <CtaBox title="Have something in mind?" body="I am always interested in thoughtful product work, especially projects that mix strong interfaces with solid engineering." />
    </section>
  );
}
