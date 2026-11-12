import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  html: string;
};

/** Minimal parser for the `key = "value"` frontmatter between `---` fences. */
function parse(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  if (!m) return { meta, body: raw };
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+)\s*=\s*"(.*)"\s*$/);
    if (kv) meta[kv[1]] = kv[2];
  }
  return { meta, body: m[2] };
}

function load(file: string): Post & { status: string } {
  const { meta, body } = parse(fs.readFileSync(path.join(dir, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title ?? file,
    excerpt: meta.excerpt ?? "",
    date: meta.date ?? "",
    tag: meta.tag ?? "",
    status: meta.status ?? "Published",
    html: marked.parse(body, { async: false }) as string,
  };
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map(load)
    .filter((p) => p.status === "Published")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}
