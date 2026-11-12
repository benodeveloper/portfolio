import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InkButton from "@/components/ink-button";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { formatDate, getPosts } from "@/lib/content";
import { site } from "@/lib/site";

const description = "Notes on building web platforms, product engineering and the craft of shipping software.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog", description, url: "/blog" },
};

export default function BlogPage() {
  const posts = getPosts();
  // The section only exists once there is something to read (the nav link is hidden too).
  if (posts.length === 0) notFound();

  return (
    <section className="pt-24 pb-16">
      <SectionHead num="03" title="Writing" intro={description} />

      <div className="border-t-2 border-ink">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post">
            <div className="w-12 shrink-0 font-display text-3xl opacity-40">{String(i + 1).padStart(2, "0")}</div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <time className="chip solid" dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="chip">{post.readingMinutes} min read</span>
                {post.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">{post.title}</h2>
              <p className="max-w-2xl text-sm leading-relaxed">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Follow along</p>
            <p className="mt-3 text-sm leading-relaxed">
              New work lands on GitHub first. Follow along there or reach out if you want to compare notes.
            </p>
            <InkButton href={site.github} variant="light" className="mt-6">GitHub</InkButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6 h-full">
            <p className="font-display text-xl font-bold">Have a topic in mind?</p>
            <p className="mt-3 text-sm leading-relaxed">I am happy to write about a problem you are working through. Send it over.</p>
            <InkButton href="/contact" variant="dark" className="mt-6">Get in touch</InkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
