import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-museo',
});

// Advanced SEO Metadata
export const metadata: Metadata = {
  title: "Hassan Benadardor | Full-Stack Software Developer",
  description: "Portfolio of Hassan Benadardor, a Software Developer based in Morocco specializing in full-stack web and mobile applications.",
  keywords: [
    "Hassan Benadardor",
    "Software Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "Morocco"
  ],
  authors: [{ name: "Hassan Benadardor" }],
  creator: "Hassan Benadardor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benodeveloper.com", // Update this to your actual domain
    title: "Hassan Benadardor | Software Developer",
    description: "Portfolio of Hassan Benadardor, a Software Developer specializing in full-stack web and mobile applications.",
    siteName: "Hassan Benadardor",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Hassan Benadardor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Benadardor | Software Developer",
    description: "Portfolio of Hassan Benadardor, a Software Developer specializing in full-stack web and mobile applications.",
    images: ["/me.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, museoModerno.variable, "antialiased bg-[#1c1b22] text-white")}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="grow">
          {children}
        </div>

        <footer className="max-w-5xl mx-auto border-t border-white/20 py-8 mt-12 w-full">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-4">
            <p>© {new Date().getFullYear()} Hassan Benadardor. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
