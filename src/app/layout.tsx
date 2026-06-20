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

export const metadata: Metadata = {
  title: "Hassan Benadardor | Software Developer",
  description: "Portfolio, projects, and writings of Hassan Benadardor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, museoModerno.variable, "antialiased bg-[#1c1b22]")}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="grow">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="border-t border-slate-200 py-8 mt-12">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Hassan Benadardor. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
