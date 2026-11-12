import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let phones/tablets on the local network load dev resources (HMR, client JS) when testing
  // against `next dev` via the machine's LAN IP. Without this the page renders but never
  // hydrates, so nothing interactive works. Dev-only: has no effect on production builds.
  allowedDevOrigins: ["192.168.*.*"],
};

// MDX content lives in /content (blog posts and projects), not in /app, so no pageExtensions
// change is needed. Plugins are passed by name so they work with Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter", // parse the YAML block at the top of each file instead of rendering it
      "remark-mdx-frontmatter", // ...and expose it as `export const frontmatter`
      "remark-gfm", // tables, strikethrough, task lists, autolinks
    ],
  },
});

export default withMDX(nextConfig);
