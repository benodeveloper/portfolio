import type { Metadata } from "next";
import Link from "next/link";
import InkButton from "@/components/ink-button";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { formatDate, getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing | Hassan Benadardor",
  description: "Notes on Rust, product engineering, and the craft of building for the web.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="pt-24 pb-16">
      <SectionHead num="03" title="Writing" intro="Notes on Rust, product engineering, and the craft of building for the web." />

      <div className="border-t-4 border-ink">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post">
            <div className="w-12 shrink-0 font-display text-3xl opacity-40">{String(i + 1).padStart(2, "0")}</div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip solid">{post.tag}</span>
                <span className="chip">{formatDate(post.date)}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl uppercase">{post.title}</h2>
              <p className="max-w-2xl text-sm leading-relaxed">{post.excerpt}</p>
            </div>
            <span className="arrow text-3xl" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card p-6 h-full">
            <p className="font-display text-xl uppercase">Follow along</p>
            <p className="mt-3 text-sm leading-relaxed">
              New notes land on GitHub first. Follow the work there or reach out if you want to compare notes.
            </p>
            <InkButton href={site.github} variant="light" className="mt-6">GitHub</InkButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6 h-full">
            <p className="font-display text-xl uppercase">Have a topic in mind?</p>
            <p className="mt-3 text-sm leading-relaxed">I am happy to write about a problem you are working through. Send it over.</p>
            <InkButton href="/contact" variant="dark" className="mt-6">Get in touch</InkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
