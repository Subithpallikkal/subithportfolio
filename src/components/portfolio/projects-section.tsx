"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { FadeIn } from "./fade-in";

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected work and product outcomes
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Add public URLs in <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-zinc-200">src/lib/content.ts</code>{" "}
            on each project when ready.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/6 to-transparent p-px shadow-2xl shadow-slate-950/70"
              >
                <div className="flex h-full flex-col rounded-[15px] bg-[#080c16e6] p-6 backdrop-blur-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition hover:text-teal-200"
                          >
                            {project.title}
                            <ExternalIcon className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2">
                            {project.title}
                            <ExternalIcon className="text-zinc-600" />
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-teal-200/80">{project.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                      Case
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-400">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-br from-teal-300 to-sky-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
    </div>
  );
}
