import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subith — Full Stack Developer",
  description:
    "Portfolio of Subith — Full Stack Developer specializing in the MERN stack, React, TypeScript, NestJS, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#070a12] font-sans text-zinc-100">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
