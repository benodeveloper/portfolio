import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBox from "@/components/cta-box";
import InkButton from "@/components/ink-button";
import JsonLd from "@/components/json-ld";
import { absoluteUrl, formatDate, getProject, getProjects } from "@/lib/content";
import { ogImage, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const url = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    keywords: project.tags,
    alternates: { canonical: url },
    openGraph: { images: [ogImage], title: project.title, description: project.description, url },
    twitter: { card: "summary_large_image", images: [ogImage.url], title: project.title, description: project.description },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { default: Body } = await import(`@content/projects/${slug}.mdx`);

  return (
    <article className="pt-24 pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          keywords: project.tags.join(", "),
          url: absoluteUrl(`/projects/${project.slug}`),
          ...(project.date && { dateCreated: project.date }),
          ...(project.url && { sameAs: project.url }),
          creator: { "@type": "Person", name: site.name, url: site.url },
        }}
      />

      <Link href="/projects" className="inline-flex items-center gap-2 font-display font-bold transition-opacity hover:opacity-60">
        All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip solid">{project.role}</span>
          {project.date && <time className="chip" dateTime={project.date}>{formatDate(project.date)}</time>}
          {project.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight">{project.title}</h1>
        <p className="soak mt-4 text-lg leading-relaxed">{project.description}</p>
        {(project.url || project.repo) && (
          <div className="mt-8 flex flex-wrap gap-5">
            {project.url && <InkButton href={project.url} variant="dark">Visit project</InkButton>}
            {project.repo && <InkButton href={project.repo} variant="light">Source code</InkButton>}
          </div>
        )}
      </header>

      <div className="md soak mt-12 max-w-3xl" style={{ "--ad": "0.4s" } as React.CSSProperties}>
        <Body />
      </div>

      <CtaBox className="max-w-3xl" title="Have something similar in mind?" body="I enjoy building platforms like this one. Tell me about yours." />
    </article>
  );
}
