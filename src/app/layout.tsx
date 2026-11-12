import type { Metadata, Viewport } from "next";
import { Space_Mono, Special_Elite } from "next/font/google";
import "./globals.css";
import ClickSplat from "@/components/click-splat";
import InkBackground from "@/components/ink-background";
import InkFilters from "@/components/ink-filters";
import Navbar from "@/components/navbar";
import { site } from "@/lib/site";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
});

export const viewport: Viewport = {
  themeColor: "#f1e9d6",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: ["Hassan Benadardor", "Software Developer", "Full-Stack Developer", "Web Developer", "Mobile Developer", "Morocco"],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/me-character.png", width: 2048, height: 2048, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: ["/me-character.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${specialElite.variable}`}>
      <body className="font-sans antialiased relative overflow-x-hidden min-h-screen">
        <InkFilters />
        <InkBackground />
        <ClickSplat />
        <Navbar />
        <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:px-16">{children}</main>
      </body>
    </html>
  );
}
