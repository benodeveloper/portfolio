import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBox from "@/components/cta-box";
import JsonLd from "@/components/json-ld";
import { absoluteUrl, formatDate, getPost, getPosts } from "@/lib/content";
import { ogImage, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      images: [ogImage],
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", images: [ogImage.url], title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Body } = await import(`@content/blog/${slug}.mdx`);

  return (
    <article className="pt-24 pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          keywords: post.tags.join(", "),
          url: absoluteUrl(`/blog/${post.slug}`),
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          author: { "@type": "Person", name: site.name, url: site.url },
        }}
      />

      <Link href="/blog" className="inline-flex items-center gap-2 font-display font-bold transition-opacity hover:opacity-60">
        Back to writing
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <time className="chip solid" dateTime={post.date}>{formatDate(post.date, "long")}</time>
          <span className="chip">{post.readingMinutes} min read</span>
          {post.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="soak mt-4 text-lg leading-relaxed">{post.description}</p>
      </header>

      <div className="md soak mt-12 max-w-3xl" style={{ "--ad": "0.4s" } as React.CSSProperties}>
        <Body />
      </div>

      <CtaBox className="max-w-3xl" title="Want to talk about it?" body="Send a note if you are working on something related." cta="Get in touch" />
    </article>
  );
}
