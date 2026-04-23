"use client";

import { motion } from "framer-motion";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-500"
        >
          © {year} Subith. Built with Next.js and a lot of coffee.
        </motion.div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="#top"
            className="rounded-full border border-white/10 px-4 py-1.5 text-zinc-300 transition hover:border-teal-400/40 hover:text-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
