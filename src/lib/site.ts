export const site = {
  name: "Hassan Benadardor",
  title: "Hassan Benadardor | Lead Software Developer",
  jobTitle: "Lead Software Developer",
  employer: "go-digital",
  location: { city: "Agadir", country: "Morocco", countryCode: "MA" },
  description:
    "Hassan Benadardor is a Lead Software Developer in Agadir, Morocco, building and leading web platforms with Laravel, React and Next.js, from data model to deployment.",
  url: "https://benodeveloper.com",
  github: "https://github.com/benodeveloper",
  email: "listoun.developer@gmail.com",
  linkedin: "https://www.linkedin.com/in/benodeveloper/",
  resume: "/el-hassan-benadardor-resume.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;
