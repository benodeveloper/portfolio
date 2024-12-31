import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import { Mona_Sans, Hubot_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Beno Developer",
  description: "Hello there!  Welcome to my digital oasis, where I share my experience building amazing products and improving my coding and problem-solving skills.",
};

const monaSansFont = Mona_Sans({
  style: 'normal', subsets: ['latin'],
  variable: '--font-mona-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});
const hubotSansFont = Hubot_Sans({
  variable: '--font-hubot-sans',
  style: 'normal',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hubotSansFont.variable} ${monaSansFont.variable} bg-gray-950 text-gray-900`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
