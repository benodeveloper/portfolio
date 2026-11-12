export type Experience = {
  period: string;
  kind: "Work" | "Freelance" | "Education";
  role: string;
  org: string;
  location: string;
  href?: string;
  points: string[];
};

/** Newest first, by start date. Source: public/el-hassan-benadardor-resume.tex */
export const experiences: Experience[] = [
  {
    period: "May 2026 — Sep 2026",
    kind: "Freelance",
    role: "Freelance Software Developer",
    org: "RoadRed",
    location: "Remote",
    href: "https://roadred.fr",
    points: [
      "Built a custom web-based management application for a digital freight-matching platform, covering the services offered to transport companies, truck owners and fleet managers.",
    ],
  },
  {
    period: "Oct 2024 — Present",
    kind: "Work",
    role: "Lead Software Developer",
    org: "go-digital",
    location: "Agadir, Morocco",
    points: [
      "Directing a team of developers across four client platforms: web application delivery, code reviews and DevOps workflows.",
      "Architected the CRI Souss-Massa support-request platform (Laravel 11, React, Inertia.js, Reverb, Redis, Docker), including an advanced business plan generator with French and Arabic notices.",
      "Built ABRID Connect, CRI Souss-Massa's public entrepreneurship ecosystem platform.",
      "Engineered cloud-native media storage on AWS and run CI/CD with GitHub Actions to self-hosted VPS servers.",
    ],
  },
  {
    period: "Jul 2023 — Jun 2025",
    kind: "Freelance",
    role: "Freelance Software Developer",
    org: "Cabinet Advice",
    location: "Morocco",
    href: "https://gestancia.com",
    points: [
      "Developed custom management software for the firm's clients, then helped turn it into Gestancia, a SaaS for technical and medical assistance providers: mission management, fleet tracking, real-time invoicing and dashboards.",
    ],
  },
  {
    period: "May 2022 — Nov 2023",
    kind: "Freelance",
    role: "Freelance Web Developer",
    org: "Capital Business City",
    location: "Morocco",
    points: [
      "Built the company's websites, including the Capital Business City corporate site and the BusinessNow TV media website, along with other client web projects.",
    ],
  },
  {
    period: "Feb 2022 — Oct 2024",
    kind: "Work",
    role: "Full-Stack Software Developer",
    org: "Doctori",
    location: "Agadir, Morocco",
    href: "https://doctori.ma",
    points: [
      "Helped lead the refactor of the core backend monolith of Morocco's online doctor booking platform, from Symfony to Laravel.",
      "Built real-time online video consultations with the Vonage Video API.",
      "Developed the cross-platform mobile app in Flutter.",
      "Worked in an 8-person team: three developers, two UI/UX designers, two videographers and one growth marketer.",
    ],
  },
  {
    period: "Nov 2019 — Jan 2022",
    kind: "Work",
    role: "Web Developer",
    org: "Grafimage",
    location: "Agadir, Morocco",
    href: "https://grafimage.com",
    points: [
      "Managed and scaled all-souss-massa, the CRT Agadir regional tourism platform (Laravel 6), sustaining peaks above 80K visitors through Apache, PHP-FPM and query tuning.",
      "Rebuilt the company corporate website in Next.js.",
    ],
  },
  {
    period: "2017 — 2019",
    kind: "Education",
    role: "Technicien Spécialisé en Techniques de Développement Informatique (TDI)",
    org: "OFPPT",
    location: "Guelmim, Morocco",
    points: ["Bac+2 equivalent in software development."],
  },
  {
    period: "2017 — 2019",
    kind: "Freelance",
    role: "Freelance Software Developer",
    org: "Independent",
    location: "Morocco",
    points: [
      "Delivered custom management software for regional clients with Symfony 3/4, C# and ADO.NET.",
      "Built comprehensive management software for a large military hospital (2019) in C# and ADO.NET.",
    ],
  },
  {
    period: "2015 — 2017",
    kind: "Education",
    role: "Technicien en Maintenance et Support Informatique et Réseaux (TMSIR)",
    org: "OFPPT",
    location: "Guelmim, Morocco",
    points: ["Graduated in the top 10 of the class. The IT systems and networking foundation that led into software development."],
  },
];
