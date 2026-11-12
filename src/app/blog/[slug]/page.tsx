import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBox from "@/components/cta-box";
import { formatDate, getPost, getPosts } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: `${post.title} | Hassan Benadardor`, description: post.excerpt } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-24 pb-16">
      <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] transition-opacity hover:opacity-60">
        ← Back to writing
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip solid">{post.tag}</span>
          <span className="chip">{formatDate(post.date)}</span>
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="soak mt-4 text-lg leading-relaxed">{post.excerpt}</p>
      </header>

      <div className="md soak mt-12 max-w-3xl" style={{ "--ad": "0.4s" } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: post.html }} />

      <CtaBox className="max-w-3xl" title="Want to talk about it?" body="Send a note if you are working on something related." cta="Get in touch" />
    </article>
  );
}
