"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export function AboutSection() {
  const paragraphs = about.split("\n\n");

  return (
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, x: 56 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-72px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90">About me</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Building products with clarity and craft
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-72px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 text-base leading-relaxed text-zinc-400"
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-72px" }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/7 to-transparent p-6 ring-1 ring-inset ring-white/10"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-violet-600/20 blur-3xl" />
          <dl className="relative space-y-4 text-sm">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Focus</dt>
              <dd className="mt-1 text-zinc-200">
                Full stack product delivery — UX-aware engineering from schema to screen.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Domains</dt>
              <dd className="mt-1 text-zinc-200">
                eCommerce, HRMS, POS, insurance broking platforms, and internal business tools.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Design</dt>
              <dd className="mt-1 text-zinc-200">
                Figma, Photoshop, Adobe XD — interfaces that feel intentional in production.
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
