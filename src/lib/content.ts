import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { navLinks, site } from "@/lib/site";

/*
 * Content collections backed by MDX files:
 *   content/blog/<slug>.mdx      -> /blog/<slug>
 *   content/projects/<slug>.mdx  -> /projects/<slug>
 *
 * The frontmatter is read here (for listings, metadata, the sitemap and the nav);
 * the body is compiled by @next/mdx when the detail page imports the file.
 * Files starting with "_" (e.g. _template.mdx) are ignored. See content/README.md.
 */

const ROOT = path.join(process.cwd(), "content");
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  tags: string[];
  readingMinutes: number;
  image?: CoverImage;
};

/** Optional cover image for a post: a file in /public plus who made it and under which license. */
export type CoverImage = {
  src: string; // e.g. /images/blog/my-post.jpg
  width: number;
  height: number;
  alt: string;
  credit: string; // the full credit line shown under the image, e.g. "Photo by Jane Doe"
  creditUrl?: string; // where the image comes from (its source page)
  license?: string; // e.g. "CC BY 4.0"
  licenseUrl?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
  url?: string;
  repo?: string;
  date?: string;
  order: number;
  glyph: string;
};

type Raw = { slug: string; file: string; data: Record<string, unknown>; body: string };

function readCollection(dir: string): Raw[] {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), "utf8"));
      return { slug: file.replace(/\.mdx$/, ""), file: `content/${dir}/${file}`, data, body: content };
    })
    .filter(({ data }) => SHOW_DRAFTS || data.draft !== true);
}

// --- frontmatter helpers: fail the build with a clear message instead of rendering junk ---

function req(raw: Raw, key: string): string {
  const v = raw.data[key];
  if (typeof v !== "string" || !v.trim()) throw new Error(`${raw.file}: frontmatter "${key}" is required (text).`);
  return v.trim();
}

function opt(raw: Raw, key: string): string | undefined {
  const v = raw.data[key];
  if (v === undefined || v === null || v === "") return undefined;
  if (typeof v !== "string") throw new Error(`${raw.file}: frontmatter "${key}" must be text.`);
  return v.trim();
}

/** YAML turns unquoted 2026-11-12 into a Date; accept both and normalise to YYYY-MM-DD. */
function date(raw: Raw, key: string, required: true): string;
function date(raw: Raw, key: string, required?: false): string | undefined;
function date(raw: Raw, key: string, required = false) {
  const v = raw.data[key];
  if (v === undefined || v === null || v === "") {
    if (required) throw new Error(`${raw.file}: frontmatter "${key}" is required (YYYY-MM-DD).`);
    return undefined;
  }
  const d = v instanceof Date ? v : new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new Error(`${raw.file}: frontmatter "${key}" is not a valid date (use YYYY-MM-DD).`);
  return d.toISOString().slice(0, 10);
}

function list(raw: Raw, key: string): string[] {
  const v = raw.data[key];
  if (v === undefined || v === null) return [];
  if (!Array.isArray(v) || v.some((t) => typeof t !== "string")) throw new Error(`${raw.file}: frontmatter "${key}" must be a list of text, e.g. [Laravel, React].`);
  return v.map((t) => t.trim()).filter(Boolean);
}

function url(raw: Raw, key: string): string | undefined {
  const v = opt(raw, key);
  if (v && !/^https?:\/\//.test(v)) throw new Error(`${raw.file}: frontmatter "${key}" must start with http:// or https://.`);
  return v;
}

function cover(raw: Raw): CoverImage | undefined {
  const src = opt(raw, "image");
  if (!src) return undefined;
  if (!src.startsWith("/")) throw new Error(`${raw.file}: frontmatter "image" must be a path in /public, e.g. /images/blog/my-post.jpg.`);
  const size = (key: string) => {
    const v = raw.data[key];
    if (typeof v !== "number" || v <= 0) throw new Error(`${raw.file}: frontmatter "${key}" is required with "image" (pixels).`);
    return v;
  };
  return {
    src,
    width: size("imageWidth"),
    height: size("imageHeight"),
    alt: req(raw, "imageAlt"),
    credit: req(raw, "imageCredit"),
    creditUrl: url(raw, "imageCreditUrl"),
    license: opt(raw, "imageLicense"),
    licenseUrl: url(raw, "imageLicenseUrl"),
  };
}

// --- collections ---

export function getPosts(): Post[] {
  return readCollection("blog")
    .map((raw) => ({
      slug: raw.slug,
      title: req(raw, "title"),
      description: req(raw, "description"),
      date: date(raw, "date", true),
      updated: date(raw, "updated"),
      tags: list(raw, "tags"),
      readingMinutes: Math.max(1, Math.round(raw.body.split(/\s+/).filter(Boolean).length / 220)),
      image: cover(raw),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

const GLYPHS = ["◒", "◐", "◍", "◌", "◑", "◓", "◔", "◕", "◖", "◗"];

export function getProjects(): Project[] {
  return readCollection("projects")
    .map((raw) => {
      const order = raw.data.order;
      if (order !== undefined && typeof order !== "number") throw new Error(`${raw.file}: frontmatter "order" must be a number.`);
      return {
        slug: raw.slug,
        title: req(raw, "title"),
        description: req(raw, "description"),
        role: req(raw, "role"),
        tags: list(raw, "tags"),
        url: url(raw, "url"),
        repo: url(raw, "repo"),
        date: date(raw, "date"),
        order: (order as number | undefined) ?? 100,
        glyph: opt(raw, "glyph") ?? "",
      };
    })
    .sort((a, b) => a.order - b.order || (b.date ?? "").localeCompare(a.date ?? "") || a.title.localeCompare(b.title))
    .map((p, i) => ({ ...p, glyph: p.glyph || GLYPHS[i % GLYPHS.length] }));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
export const getProject = (slug: string) => getProjects().find((p) => p.slug === slug);

/** Nav links, hiding Blog / Projects while their collection is empty. */
export function getNavLinks() {
  const hasPosts = getPosts().length > 0;
  const hasProjects = getProjects().length > 0;
  return navLinks
    .filter(({ href }) => (href === "/blog" ? hasPosts : href === "/projects" ? hasProjects : true))
    .map(({ href, label }) => ({ href, label }));
}

export function formatDate(iso: string, month: "short" | "long" = "short") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { day: "numeric", month, year: "numeric", timeZone: "UTC" });
}

export const absoluteUrl = (p: string) => new URL(p, site.url).toString();
