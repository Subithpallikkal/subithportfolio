"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-150 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-[#070a12]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white transition hover:text-teal-200"
        >
          Subith<span className="text-teal-400">.</span>
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-zinc-200 transition hover:border-teal-300/40 hover:text-white md:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav className="hidden items-center gap-1 text-sm sm:gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <motion.nav
        id="mobile-nav"
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="overflow-hidden border-t border-white/10 bg-[#070a12]/95 backdrop-blur md:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
