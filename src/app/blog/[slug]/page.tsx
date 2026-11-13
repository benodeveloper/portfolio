import type { Metadata } from "next";
import Image from "next/image";
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
  // Link previews use the post's cover image when it has one, the site-wide card otherwise.
  const image = post.image
    ? { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }
    : ogImage;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      images: [image],
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", images: [image.url], title: post.title, description: post.description },
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
          ...(post.image && {
            image: {
              "@type": "ImageObject",
              url: absoluteUrl(post.image.src),
              width: post.image.width,
              height: post.image.height,
              caption: post.image.alt,
              creditText: post.image.credit,
              ...(post.image.licenseUrl && { license: post.image.licenseUrl }),
              ...(post.image.creditUrl && { acquireLicensePage: post.image.creditUrl }),
            },
          }),
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

      {post.image && (
        <figure className="soak mt-10 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-[var(--wobble-sm)] border-[2.5px] border-ink shadow-[var(--shadow-hard)]"
            style={{ aspectRatio: `${post.image.width} / ${post.image.height}` }}
          >
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              preload
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm opacity-70">
            {post.image.creditUrl ? (
              <a href={post.image.creditUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:opacity-70">
                {post.image.credit}
              </a>
            ) : (
              post.image.credit
            )}
            {post.image.license && (
              <>
                {", "}
                {post.image.licenseUrl ? (
                  <a href={post.image.licenseUrl} target="_blank" rel="license noreferrer" className="underline underline-offset-2 hover:opacity-70">
                    {post.image.license}
                  </a>
                ) : (
                  post.image.license
                )}
              </>
            )}
          </figcaption>
        </figure>
      )}

      <div className="md soak mt-12 max-w-3xl" style={{ "--ad": "0.4s" } as React.CSSProperties}>
        <Body />
      </div>

      <CtaBox className="max-w-3xl" title="Want to talk about it?" body="Send a note if you are working on something related." cta="Get in touch" />
    </article>
  );
}
