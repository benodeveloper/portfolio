import type { MetadataRoute } from "next";
import { absoluteUrl, getPosts, getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const projects = getProjects();
  const latestPost = posts[0]?.updated ?? posts[0]?.date;

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/experience"), changeFrequency: "monthly", priority: 0.8 },
    // Blog and Projects are only listed while they have content (they 404 otherwise).
    ...(projects.length ? [{ url: absoluteUrl("/projects"), changeFrequency: "monthly" as const, priority: 0.8 }] : []),
    ...projects.map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      ...(p.date && { lastModified: p.date }),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...(posts.length ? [{ url: absoluteUrl("/blog"), lastModified: latestPost, changeFrequency: "weekly" as const, priority: 0.7 }] : []),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updated ?? p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.5 },
  ];
}
