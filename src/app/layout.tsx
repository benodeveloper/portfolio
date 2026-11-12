import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Shantell_Sans } from "next/font/google";
import "./globals.css";
import ClickSplat from "@/components/click-splat";
import InkBackground from "@/components/ink-background";
import InkFilters from "@/components/ink-filters";
import Navbar from "@/components/navbar";
import { getNavLinks } from "@/lib/content";
import { site } from "@/lib/site";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const shantell = Shantell_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-shantell",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Hassan Benadardor",
    "El-Hassan Benadardor",
    "Lead Software Developer",
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Agadir",
    "Morocco",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
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
    url: "/",
    title: site.title,
    description: site.description,
    siteName: site.name,
    // image: src/app/opengraph-image.png (+ .alt.txt), applied to every page by the file convention
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${shantell.variable}`}>
      <body className="font-sans antialiased relative overflow-x-hidden min-h-screen">
        <noscript><style>{".reveal{opacity:1;filter:none;transform:none}"}</style></noscript>
        <InkFilters />
        <InkBackground />
        <ClickSplat />
        <Navbar links={getNavLinks()} />
        <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:px-16">{children}</main>
      </body>
    </html>
  );
}
