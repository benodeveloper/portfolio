# Hassan Benadardor — Portfolio

Personal portfolio of **Hassan Benadardor**, Lead Software Developer in Agadir, Morocco.
Live at **[benodeveloper.com](https://benodeveloper.com)**.

The site is drawn like a page from an ink illustration book: pure black ink on white paper,
halftone dot shading, hand-drawn outlines and small animated doodles. No colours, no gradients.

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Content: blog posts and projects (MDX)](#content-blog-posts-and-projects-mdx)
- [The résumé download](#the-résumé-download)
- [Private files](#private-files)
- [Design system](#design-system)
- [SEO](#seo)
- [Deployment](#deployment)
- [Testing on a phone](#testing-on-a-phone)
- [Branches](#branches)

---

## Features

- **Home** — hero with an ink character, doodles that draw themselves in, and a framed photo that
  springs up when you hover the character.
- **Experience** — a timeline of work and education, built from `src/data/experience.ts`.
- **Contact** — contact details only (email, GitHub, LinkedIn, résumé).
- **Résumé** — downloadable PDF, protected by Google reCAPTCHA and short-lived signed links.
- **Blog and Projects** — written as MDX files in `content/`. Each section appears in the menu,
  the sitemap and search engines only once it has at least one published file.
- **Mobile menu** — full-screen menu that grows out of the burger button, with focus trapping,
  Escape to close and focus restore.
- **Animations** — ink "bleed" heading, brush underline, scroll reveals, a comic "pop" on every click.
- **SEO** — page titles, descriptions, canonical URLs, Open Graph / Twitter cards, JSON-LD,
  `sitemap.xml` and `robots.txt`.

## Tech stack

| Area      | Choice |
| --------- | ------ |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI        | React 19, TypeScript 6 |
| Styling   | Tailwind CSS v4 + hand-written CSS in `src/app/globals.css` |
| Content   | MDX via `@next/mdx`, frontmatter via `remark-frontmatter` / `remark-mdx-frontmatter` / `gray-matter`, GFM via `remark-gfm` |
| Fonts     | Shantell Sans (headings), Instrument Sans (body), via `next/font` |
| Security  | Google reCAPTCHA v2, HMAC-signed download links |

> **Note:** TypeScript is pinned to 6.x because `typescript-eslint` does not support TypeScript 7 yet.

> **Next.js 16 note:** this version has breaking changes compared to older Next.js releases. Before
> changing framework-level code, read the bundled docs in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Getting started

Requirements: **Node.js 20.9 or newer** and npm.

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

| Script          | What it does |
| --------------- | ------------ |
| `npm run dev`   | Development server with hot reload. Drafts (`draft: true`) are visible. |
| `npm run build` | Production build. Also validates every MDX file's frontmatter. |
| `npm run start` | Serve the production build. |
| `npm run lint`  | ESLint. |

Type-check without building: `npx tsc --noEmit`.

## Environment variables

Copy `.env.example` to `.env.local` (never commit it) and set the same variables on your host.

| Variable                         | Required | Purpose |
| -------------------------------- | -------- | ------- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | for the résumé | reCAPTCHA v2 site key (public, read at **build** time). |
| `RECAPTCHA_SECRET_KEY`           | for the résumé | reCAPTCHA v2 secret key (server only, read at **request** time). |
| `RESUME_LINK_SECRET`             | optional | Secret used to sign résumé download links. Defaults to `RECAPTCHA_SECRET_KEY`. Generate one with `openssl rand -base64 32`. |
| `RESUME_GITHUB_REPO`             | in production | Private repo holding the résumé: `benodeveloper/portfolio-private`. |
| `RESUME_GITHUB_TOKEN`            | in production | Fine-grained GitHub token with **Contents: Read-only** on that repo only. |
| `RESUME_GITHUB_PATH`             | optional | Path of the PDF in that repo. Defaults to `el-hassan-benadardor-resume.pdf`. |
| `RESUME_GITHUB_REF`              | optional | Branch, tag or commit to read. Defaults to `main`. |

Create the reCAPTCHA keys at <https://www.google.com/recaptcha/admin>: choose **Challenge (v2) →
"I'm not a robot" Checkbox** and add your domains (for example `benodeveloper.com` and `localhost`).
Without the site key, the résumé page shows a friendly "not available" message instead of the captcha.

**Use the secret key for `RECAPTCHA_SECRET_KEY`, not the site key.** They look alike; if they are the
same, the server logs `RECAPTCHA_SECRET_KEY is set to the SITE key` and downloads are disabled.

## Project structure

```
.
├── content/                 # MDX content (see content/README.md)
│   ├── blog/                #   blog posts      -> /blog/<file-name>
│   └── projects/            #   projects        -> /projects/<file-name>
├── private/                 # NOT served, NOT committed: résumé PDF + source, private photos
├── public/                  # static files served as-is (images, favicons)
├── src/
│   ├── app/                 # routes (App Router)
│   │   ├── page.tsx         #   home
│   │   ├── experience/      #   timeline
│   │   ├── contact/         #   contact details
│   │   ├── resume/          #   reCAPTCHA gate for the résumé
│   │   ├── blog/            #   list + [slug] (404 while there are no posts)
│   │   ├── projects/        #   list + [slug] (404 while there are no projects)
│   │   ├── api/resume/      #   captcha verification + signed PDF download
│   │   ├── sitemap.ts, robots.ts, opengraph-image.png
│   │   ├── layout.tsx       #   fonts, metadata, navbar, background
│   │   └── globals.css      #   the whole design system
│   ├── components/          # navbar, hero, doodles, ink buttons, cards, reveal, ...
│   ├── data/experience.ts   # timeline entries
│   ├── lib/
│   │   ├── site.ts          # name, links, email, nav links, social image
│   │   ├── content.ts       # reads + validates MDX frontmatter, builds the nav
│   │   └── resume-access.ts # captcha verification and link signing (server only)
│   └── mdx-components.tsx   # how links/images render inside MDX
├── .env.example
└── next.config.ts           # MDX, LAN dev origins, file tracing for the résumé
```

Personal details (name, email, GitHub, LinkedIn) live in **`src/lib/site.ts`**; change them there.

## Content: blog posts and projects (MDX)

Blog posts and projects are MDX files: Markdown plus a block of settings (frontmatter) at the top.

1. Copy the template: `content/blog/_template.mdx` → `content/blog/my-post.mdx`
   (or the same in `content/projects/`). **The file name becomes the URL.**
2. Fill in the frontmatter and write the body in Markdown.
3. Keep `draft: true` while writing: the page is visible in `npm run dev` only. Remove it to publish.

Files starting with `_` are ignored. If a required field is missing or invalid, `npm run build` stops
and names the file and the field.

**Full field reference and writing guide: [`content/README.md`](content/README.md).**

## The résumé download

The PDF is never exposed at a public URL. The flow:

```
/resume  ──(user ticks reCAPTCHA)──▶  POST /api/resume { token }
                                        │ verifies the token with Google
                                        ▼
                                      { url: /api/resume/file?exp=…&sig=… }   (valid 10 minutes)
                                        │
GET /api/resume/file?exp&sig[&download=1]  ──▶ checks the HMAC signature and expiry,
                                               loads the PDF (see below) and streams it
```

**Where the PDF comes from**

- **Production (Vercel):** from the private GitHub repository
  [`benodeveloper/portfolio-private`](https://github.com/benodeveloper/portfolio-private), fetched
  server-side through the GitHub API with `RESUME_GITHUB_TOKEN`. Its README explains how to create the
  token and update the résumé. Updates are picked up within ~10 minutes without a redeploy.
- **Local development:** when `RESUME_GITHUB_REPO` / `RESUME_GITHUB_TOKEN` are not set, from
  `private/el-hassan-benadardor-resume.pdf`.

If neither works, the download returns "Résumé not available." and the server logs why
(for example `GitHub returned 401`, which means the token is wrong or expired).

- Signatures are HMAC-SHA256 over the expiry time, compared in constant time; changing the expiry or
  the signature invalidates the link.
- Responses are `Cache-Control: private, no-store` and `X-Robots-Tag: noindex`.
- `/api/` and `/resume` are disallowed in `robots.txt`, and `/resume` is marked `noindex`.
- To update the résumé, push a new PDF to `portfolio-private` (and copy it into `private/` for local
  development).

## Private files

`private/` holds files that must never be public: the résumé PDF, its LaTeX source and personal photos.

- Next.js only serves `public/`, so nothing in `private/` has a URL.
- `private/` is listed in `.gitignore`, so it is never committed or pushed.
- Because it is not in git, production reads the résumé from the private `portfolio-private`
  repository instead (see [The résumé download](#the-résumé-download)).

> Files that were committed to `public/` before this change still exist in older git history.
> Removing them from history requires rewriting it (for example with `git filter-repo`) and force-pushing.

## Design system

Everything visual is in `src/app/globals.css`, organised by section. Key building blocks:

| Token / class | What it is |
| ------------- | ---------- |
| `--ink`, `--paper` | The only two colours: `#111` and `#fff`. |
| `--halftone`, `.halftone` | Dot-pattern shading. Raise `--dot-r` for darker shading. |
| `--wobble`, `--wobble-sm` | Uneven border radii that make shapes look hand-drawn. |
| `.card` | Ink-outlined card with a halftone drop shadow. |
| `.btn`, `.btn-light`, `.btn-dark` | Ink buttons with a hard shadow and an ink "bloom" on hover (`InkButton`). |
| `.chip`, `.chip.solid` | Small rounded labels. |
| `.shade` | Organic, slowly morphing halftone patch. |
| `.doodle` | Hand-drawn SVGs that draw in and wiggle (`src/components/doodles.tsx`). |
| `.reveal` | Blur/fade-in on scroll (`<Reveal>`). |
| `.bleed`, `.soak`, `.brush`, `.btn-pop` | Page-load animations of the hero. |

Avoid decorative glyph icons (arrows such as ↗) in links and menus. Use plain labels or the doodle SVGs.

## SEO

- Titles follow `Page | Hassan Benadardor`, set by the template in `src/app/layout.tsx`.
- Every page sets a description, a canonical URL and Open Graph / Twitter data.
- The social preview image is `src/app/opengraph-image.png` (1200×630). Pages that customise
  `openGraph` must include `ogImage` from `src/lib/site.ts`, because Next.js replaces (not merges)
  a parent's `openGraph` object.
- JSON-LD: `Person` + `WebSite` on the home page, `BlogPosting` on posts, `CreativeWork` on projects.
- `sitemap.xml` lists only pages that exist; Blog and Projects appear once they have content.

## Deployment

Any Node.js host that runs `next build` + `next start` works (Vercel, a VPS, Docker...).

1. Set the [environment variables](#environment-variables). `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` must be
   present **at build time**.
2. Set `RESUME_GITHUB_REPO` and `RESUME_GITHUB_TOKEN` so the server can load the résumé from the
   private repository. (On a VPS you can instead copy the PDF to `private/` on the server.)
3. Build and start:

   ```bash
   npm ci
   npm run build
   npm run start
   ```

`next.config.ts` traces `private/*.pdf` into the `/api/resume/file` route, so a build made where that
file exists (for example on your own server) includes it.

## Testing on a phone

`npm run dev` can be opened from a phone on the same Wi-Fi via the computer's LAN address
(for example `http://192.168.1.13:3000`). `next.config.ts` allows `192.168.*.*` in `allowedDevOrigins`;
without it, Next.js blocks the dev scripts and the page never becomes interactive.

## Branches

| Branch             | Purpose |
| ------------------ | ------- |
| `main`             | Current site. |
| `next`             | Where new work is developed before it is merged into `main`. |
| `previous-version` | Snapshot of the site before the ink redesign (kept for reference). |
| `legacy`           | An older version of the portfolio. |
