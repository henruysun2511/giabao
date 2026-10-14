import type { Metadata } from "next";
import { Silkscreen, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-handwriting",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bao — CTO @ Cyclosa HRM | Portfolio",
  description:
    "Portfolio cá nhân của Bao - Chief Technology Officer (CTO) tại Cyclosa HRM. Định hướng công nghệ, SaaS architecture, AI Integration & Data Security.",
  keywords: [
    "Bao CTO",
    "Cyclosa HRM",
    "Chief Technology Officer",
    "SaaS Architecture",
    "AI Integration",
    "HR Tech",
    "Data Security",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${silkscreen.variable} ${caveat.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-sans bg-cutting-mat text-[#1A1A1A] antialiased selection:bg-[#F3B524] selection:text-black">
        {children}
      </body>
    </html>
  );
}
