import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-16 px-6 md:px-0">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">

        <div className="shrink-0 relative group">

          <a
            target="_blank"
            href="/me.png"
            className="relative block w-48 h-48 md:w-64 md:h-72 rounded-xl shadow-lg border border-slate-200 overflow-hidden bg-slate-100 z-10 transition-transform duration-300"
          >
            <Image
              src="/me.png"
              alt="Hassan Benadardor"
              fill
              className="object-cover"
              priority
            />
          </a>
        </div>

        <div className="pt-2">
          <p className="text-lg leading-relaxed ">
            I build scalable web and mobile applications from the ground up. My expertise spans across modern stacks, primarily building with Next.js, React, Laravel, and Flutter. Whether I am scaffolding robust backend services with Spring Boot or crafting intuitive user interfaces inspired by modern design systems, I focus on delivering highly functional, fast software. My entire development workflow is deeply integrated into a customized Neovim environment, allowing me to stay focused on solving complex architectural problems rather than wrestling with tooling.
          </p>
        </div>

      </div>

      <div className="pt-8">
        <p className="text-lg leading-relaxed">
          Beyond the editor, my approach to engineering is heavily influenced by the open-source community and a drive to build platforms that make a tangible impact. When I step away from the keyboard, I am usually on the move. You might find me taking road trips down the coast to places like Sidi Ifni or Legzira, keeping up with the national football team&apos;s live rankings, or spending time preparing traditional dishes like tagine. I am also currently working on my German proficiency, constantly looking for new ways to challenge myself both technically and personally.
        </p>
      </div>
    </main>
  );
}
