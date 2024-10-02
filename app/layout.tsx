import type { Metadata } from "next";
import "./app.scss";
import { Poppins } from 'next/font/google'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"], subsets:["latin"]})

export const metadata: Metadata = {
  title: "Beno developer",
  description: "Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
