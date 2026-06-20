import Image from 'next/image';
import { MapPin, Mail, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">

      {/* Image Section */}
      <div className="shrink-0 relative group">
        {/* Subtle glowing backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-300 to-sky-200 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>

        {/* Image Container */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center">

          {/* Placeholder - Remove this when you add your image */}
          <span className="text-slate-400 font-medium text-sm">Image Placeholder</span>

          {/* Uncomment this once your image is in the public folder */}
          {/* <Image 
            src="/profile.jpg" 
            alt="Hassan Benadardor" 
            fill 
            className="object-cover"
            priority
          /> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col space-y-6 text-center md:text-left z-10">

        {/* Header & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Hassan Benadardor
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-medium text-lg">
            <Terminal className="w-5 h-5" />
            <span>Software Developer</span>
          </div>
        </div>

        {/* The Bio Paragraph */}
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          I build scalable web and mobile applications from the ground up. My expertise spans across modern stacks, primarily building with Next.js, Laravel, and Flutter. Whether I am architecting complex backend systems or crafting intuitive user interfaces, I focus on delivering highly functional, fast software. Most of my code is written in Neovim on Arch Linux.
        </p>

        {/* Location / Meta Details */}
        <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">Agadir, Morocco</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)]"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            GitHub
          </a>
        </div>
      </div>

    </main>
  );
}
