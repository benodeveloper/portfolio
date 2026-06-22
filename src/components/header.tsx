import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return <header className="z-50 w-full">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

      <Link href="/">
        <Logo className="w-17 h-17 text-3xl text-white from-transparent to-transparent" />
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
        <Link href="/" className="hover:underline">About</Link>
      </nav>

      {/* Desktop Navigation Links 
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
        <Link href="/" className="hover:underline">About</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/resume" className="hover:underline">Resume</Link>
      </nav>

      <button className="md:hidden p-2 -mr-2 text-slate-600 hover:text-blue-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>*/}
    </div>
  </header>

}
