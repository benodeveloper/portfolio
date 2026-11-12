export type Project = {
  title: string;
  context: string;
  glyph: string;
  blurb: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "ABRID Connect",
    context: "go-digital",
    glyph: "◒",
    blurb:
      "CRI Souss-Massa's public entrepreneurship ecosystem platform, connecting entrepreneurs, startups, freelancers and cooperatives with support organizations, programs, experts and financing.",
    tags: ["Laravel", "React", "Inertia.js"],
    href: "https://www.abridsoussmassa.com/en",
  },
  {
    title: "CRI Support Platform",
    context: "go-digital",
    glyph: "◐",
    blurb:
      "Investors and project holders submit support requests and build their business plan with an advanced generator producing investor models, with French and Arabic notices.",
    tags: ["Laravel 11", "Reverb", "Redis", "Docker"],
  },
  {
    title: "Doctori",
    context: "2022 — 2024",
    glyph: "◍",
    blurb:
      "Morocco's online doctor booking platform. Backend monolith migrated from Symfony to Laravel, real-time video consultations with Vonage, and a cross-platform Flutter app.",
    tags: ["Laravel", "Flutter", "Vonage"],
    href: "https://doctori.ma",
  },
  {
    title: "Gestancia",
    context: "Cabinet Advice",
    glyph: "◌",
    blurb:
      "A SaaS for technical and medical assistance providers (towing, ambulance, medical transport): mission management, fleet tracking, real-time invoicing and dashboards.",
    tags: ["SaaS", "Dashboards", "Fleet tracking"],
    href: "https://gestancia.com",
  },
  {
    title: "RoadRed",
    context: "2026",
    glyph: "◑",
    blurb:
      "A custom management application for a digital freight-matching platform, serving transport companies, truck owners and fleet managers.",
    tags: ["Web app", "Logistics"],
    href: "https://roadred.fr",
  },
  {
    title: "all-souss-massa",
    context: "Grafimage",
    glyph: "◓",
    blurb:
      "The CRT Agadir regional tourism platform, kept stable through peaks above 80K visitors by tuning Apache, PHP-FPM sockets and database queries.",
    tags: ["Laravel 6", "Apache", "PHP-FPM"],
  },
  {
    title: "Foklumi",
    context: "Open source",
    glyph: "◔",
    blurb:
      "A desktop focus timer that turns breaks into short vocabulary lessons with text-to-speech. MIT licensed, tested in GitHub Actions, built with PyInstaller.",
    tags: ["Python", "PySide6", "GitHub Actions"],
    href: "https://github.com/benodeveloper/foklumi",
  },
  {
    title: "tracking-fleet",
    context: "Side project",
    glyph: "◕",
    blurb: "A real-time vehicle tracking REST API.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Dual-Subtitle Player",
    context: "Side project",
    glyph: "◖",
    blurb: "An Android TV media player showing two simultaneous, individually styled subtitle tracks.",
    tags: ["Flutter", "Riverpod"],
  },
  {
    title: "Revoo",
    context: "Product",
    glyph: "◗",
    blurb:
      "A multi-store management application handling infrastructure, project billing cycles and security monitoring, deployed with continuous integration.",
    tags: ["Next.js", "Supabase", "Clerk", "Netlify"],
    href: "https://revoo.cloud",
  },
];
