"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { FadeIn } from "./fade-in";

export function ExperienceSection() {
  return (
    <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Where I&apos;ve built and learned
          </h2>
        </FadeIn>

        <div className="relative mt-14 space-y-10 pl-6 sm:pl-8">
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-linear-to-b from-teal-400/60 via-white/15 to-transparent sm:left-2.25" />

          {experience.map((job, index) => (
            <FadeIn key={job.company + job.period} delay={index * 0.06}>
              <article className="relative">
                <motion.span
                  className="absolute -left-6 top-1.5 flex h-3 w-3 items-center justify-center sm:-left-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 18,
                    delay: 0.05 * index,
                  }}
                >
                  <span className="absolute h-3 w-3 rounded-full bg-teal-400/30 blur-[2px]" />
                  <span className="relative h-2 w-2 rounded-full bg-linear-to-br from-teal-300 to-sky-400 ring-2 ring-[#070a12]" />
                </motion.span>

                <div className="rounded-2xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/55 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="mt-1 text-sm font-medium text-teal-200/90">{job.company}</p>
                      <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-zinc-400">{job.period}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{job.description}</p>
                  {job.highlights && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
    </div>
  );
}
