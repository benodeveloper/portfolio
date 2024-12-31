export default function Nav() {
  return <div className="py-6 absolute inset-x-0 top-0 z-10 text-white">
    <nav className="container mx-auto flex justify-between">
      <div> LOGO</div>
      <ul className="flex gap-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  </div>;
}
