import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axl Hanuebi - Portofolio",
  description:"Portfolio of Axl Hanuebi, a Software Developer specializing in full-stack web, mobile applications, and intelligent system integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
          <main className="min-h-screen p-8 sm:p-20 max-w-5xl mx-auto font-[family-name:var(--font-geist-sans)]">
            {children}
          </main>
      </body>
    </html>
  );
}
