import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// Font Setup
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// SEO & Open Graph Setup
export const metadata: Metadata = {
  title: "Abdul Amar Aziz | Full Stack Web Developer",
  description: "Portfolio profesional Abdul Amar Aziz. Berpengalaman dalam membangun aplikasi web dari frontend hingga backend menggunakan React, Next.js, NestJS, dan PostgreSQL.",
  keywords: ["Abdul Amar Aziz", "Backend Developer", "Full Stack Developer", "NestJS", "Next.js", "Portfolio IT"],
  authors: [{ name: "Abdul Amar Aziz" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-amar.vercel.app", // Ganti dengan link Vercel Anda nanti
    title: "Abdul Amar Aziz | Full Stack Web Developer",
    description: "Portfolio profesional Abdul Amar Aziz. Building scalable web applications with modern technologies.",
    siteName: "Portfolio Abdul Amar Aziz",
    images: [
      {
        url: "/projects/campurejo.jpg", // Menggunakan gambar project Anda
        width: 1200,
        height: 630,
        alt: "Abdul Amar Aziz Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090B] bg-grid-pattern`}>
        {children}
      </body>
    </html>
  );
}