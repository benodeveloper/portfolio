import { MuseoModerno } from 'next/font/google';
import { Terminal, Sparkles, Braces } from 'lucide-react';

// Load MuseoModerno specifically for the logo
const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: '700'
});

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50 flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-blue-200 selection:text-blue-900">

      {/* Subtle Light Blue Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>

      <div className="z-10 flex flex-col items-center space-y-16 max-w-2xl text-center">

        {/* Logo Section */}
        <div className="relative group">
          {/* Intense glow effect behind the logo */}
          <div className="absolute -inset-2 bg-blue-300 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

          <div className={`relative w-24 h-24 from-blue-600 to-indigo-700  bg-linear-to-br  flex items-center justify-center shadow-xl ${museoModerno.className}`}>
            <span className="text-3xl text-white   tracking-tighter">
              bend
            </span>
          </div>
        </div>

        <div className="space-y-8 flex flex-col items-center relative">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-blue-700 text-sm backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
            <Terminal className="w-4 h-4 text-blue-600 drop-shadow-[0_0_5px_rgba(37,99,235,0.8)]" />
            <span className="font-mono tracking-tight font-medium">System Status: Compiling...</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-blue-600 to-sky-500 tracking-tight flex items-center justify-center gap-2 pb-2">
            Hello, World.
            <span className="animate-pulse inline-block w-3 h-10 md:h-14 bg-blue-500 rounded-sm shadow-[0_0_12px_rgba(59,130,246,0.9)]"></span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-lg mx-auto leading-relaxed font-medium">
            The architecture is taking shape. We are building something awesome behind the scenes. Check back soon.
          </p>
        </div>

        <div className="flex gap-8 pt-4">
          <Braces className="w-7 h-7 animate-bounce [animation-delay:-0.3s] text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <Sparkles className="w-7 h-7 animate-bounce [animation-delay:-0.15s] text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>

      </div>
    </main>
  );
}
