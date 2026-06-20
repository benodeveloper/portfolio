import { ExternalLink, FolderGit2 } from 'lucide-react';

// We map through an array so it is incredibly easy for you to add new projects later.
const projects = [
  {
    title: 'Revoo',
    description: 'A robust multi-store management application handling infrastructure, project billing cycles, and security monitoring. Deployed with continuous integration workflows.',
    tech: ['Next.js', 'Supabase', 'Clerk', 'Netlify'],
    github: '#',
    live: 'https://revoo.cloud', // Replace with actual link if public
  },
  {
    title: 'RoadRed',
    description: 'A comprehensive logistics and fleet management platform. Features include driver registration workflows, real-time notification systems, and secure document verification.',
    tech: ['Frontend', 'Backend Logic', 'CI/CD'],
    github: '#',
    live: '#',
  },
  {
    title: 'Tadix',
    description: 'A mobile game integrating a sleek, fintech-inspired user interface. Designed with complex login screens and dynamic dashboards that mimic modern crypto and trading applications.',
    tech: ['Flutter', 'Mobile UI/UX', 'Dart'],
    github: '#',
    live: '#',
  }
];

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto mt-16 px-6 md:px-0 mb-20">

      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
          A selection of applications and platforms I have architected. From complex logistics management to multi-tenant architectures and mobile interfaces.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300"
          >
            {/* Top Row: Folder Icon & Action Links */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-3">
                <a href={project.github} className="transition-colors" aria-label="GitHub Repository">
                  <span className="w-5 h-5" />
                </a>
                <a href={project.live} className="transition-colors" aria-label="Live Demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content: Title & Description */}
            <div className="grow mb-6">
              <h2 className="text-xl font-bold mb-2 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Tech Stack Tags */}
            <ul className="flex flex-wrap items-center gap-2 mt-auto">
              {project.tech.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className="px-2.5 py-1 border border-slate-200 rounded-md text-xs font-mono font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </main>
  );
}
