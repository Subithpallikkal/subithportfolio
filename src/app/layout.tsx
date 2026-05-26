import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CursorWave } from "@/components/cursor-wave";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";
import Script from "next/script";

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
        <CursorWave />
        <SmoothScroll>{children}</SmoothScroll>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wx1kqzaquf");
          `}
        </Script>
      </body>
    </html>
  );
}