# Writing blog posts and projects

Blog posts and projects are [MDX](https://mdxjs.com) files: Markdown with a small block of
settings (frontmatter) at the top. Add a file, and the site picks it up:

| Collection | Folder              | Page URL              | Listed on   |
| ---------- | ------------------- | --------------------- | ----------- |
| Blog post  | `content/blog/`     | `/blog/<file-name>`   | `/blog`     |
| Project    | `content/projects/` | `/projects/<file-name>` | `/projects` |

**Blog** and **Projects** are hidden from the menu, the sitemap and search engines while their
folder is empty (their pages return 404). They appear as soon as the first file is added.

## Create a new one

1. Copy the template in the folder: `_template.mdx` → `my-new-thing.mdx`.
   - The file name is the URL, so use lowercase words joined by dashes.
   - Files starting with `_` are ignored, which is why the template never shows up.
2. Fill in the frontmatter between the `---` lines (fields below).
3. Write the body in Markdown underneath.
4. Run `npm run dev` and open the page. While `draft: true` is set, the page only exists in
   development. Remove it (or set `draft: false`) to publish.
5. `npm run build` checks every file: a missing or invalid field stops the build with a message
   naming the file and the field.

## Blog post fields

| Field         | Required | Example                          | Notes |
| ------------- | -------- | -------------------------------- | ----- |
| `title`       | yes      | `"Shipping Laravel Reverb"`      | Page title, `<title>` tag and link previews. |
| `description` | yes      | `"What I learned..."`            | 1–2 sentences. Used in lists and as the search/meta description. |
| `date`        | yes      | `2026-01-31`                     | `YYYY-MM-DD`. Newest posts are listed first. |
| `updated`     | no       | `2026-02-15`                     | Last meaningful edit; used for SEO freshness. |
| `tags`        | no       | `[Laravel, Realtime]`            | Shown as chips and used as keywords. |
| `draft`       | no       | `true`                           | Hidden from production builds. |

## Project fields

| Field         | Required | Example                              | Notes |
| ------------- | -------- | ------------------------------------ | ----- |
| `title`       | yes      | `"ABRID Connect"`                    | |
| `description` | yes      | `"CRI Souss-Massa's ecosystem..."`   | Shown on the card and as the meta description. |
| `role`        | yes      | `"go-digital"`                       | Short label for the card chip (company, "Freelance", "Open source"...). |
| `tags`        | no       | `[Laravel, React, Inertia.js]`       | Tech stack chips. |
| `url`         | no       | `"https://example.com"`              | Adds a **Visit project** button. Must start with `https://`. |
| `repo`        | no       | `"https://github.com/you/repo"`      | Adds a **Source code** button. |
| `date`        | no       | `2025-06-01`                         | Shown on the page; tie-breaker for sorting. |
| `order`       | no       | `10`                                 | Lower numbers come first (default `100`). |
| `glyph`       | no       | `"◒"`                                | Symbol drawn on the card. One is chosen if omitted. |
| `draft`       | no       | `true`                               | Hidden from production builds. |

## Writing the body

- Don't start with a `# Heading`: the page already renders the title. Use `##` and `###`.
- Supported: paragraphs, **bold**, _italic_, links, lists, blockquotes, images, fenced code blocks,
  tables, ~~strikethrough~~ and task lists (GitHub-flavoured Markdown).
- Links starting with `/` stay on the site; other links open in a new tab.
- Images: put files in `public/images/...` and reference them as `![Alt text](/images/...)`.
  Always write alt text.
- Because it is MDX, characters `{`, `}` and `<` are special outside code blocks. Wrap them in
  backticks or escape them (`\{`) if you need them literally.

## SEO checklist for each file

- Keep `title` under ~60 characters and `description` around 120–160 characters.
- Use a clear, descriptive file name: it becomes the URL.
- Every published file is added to `/sitemap.xml` automatically and gets structured data
  (`BlogPosting` for posts, `CreativeWork` for projects).
