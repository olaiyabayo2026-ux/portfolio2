import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olaiya Adebayo | AI-Enabled Project Manager",
  description:
    "PMP®-certified AI-Enabled Project Manager with 15+ years delivering telecom, IT, and digital transformation projects. Open to AI-forward roles in Portugal and Europe.",
  keywords: ["AI Project Manager", "PMP", "Digital Transformation", "Telecom", "Portugal", "Prompt Engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] py-8 mt-24 text-center text-sm" style={{ color: "var(--muted)" }}>
          <p>© {new Date().getFullYear()} Olaiya Adebayo · Porto, Portugal</p>
          <p className="mt-1">Built with Next.js &amp; Tailwind CSS</p>
        </footer>
      </body>
    </html>
  );
}
