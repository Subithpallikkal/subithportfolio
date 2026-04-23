"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const badgeX = useTransform(scrollYProgress, [0, 0.55], [0, -90]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 0.75, 0]);

  const titleLeftX = useTransform(scrollYProgress, [0, 0.6], [0, -220]);
  const titleRightX = useTransform(scrollYProgress, [0, 0.6], [0, 220]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.65], [1, 0.72, 0]);

  const taglineX = useTransform(scrollYProgress, [0, 0.6], [0, -130]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.42, 0.68], [1, 0.7, 0]);
  const ctaX = useTransform(scrollYProgress, [0, 0.6], [0, 130]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.42, 0.68], [1, 0.7, 0]);

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative h-[165vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden will-change-transform"
          aria-hidden
        >
          {/* `next/image` fill requires a positioned, sized parent — `relative` + explicit height */}
          <div className="relative h-full min-h-full w-full [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_52%,rgba(0,0,0,0.42)_76%,transparent_100%)] mask-[linear-gradient(to_bottom,black_0%,black_52%,rgba(0,0,0,0.42)_76%,transparent_100%)]">
            <Image
              src={site.portraitSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[64%_22%] sm:object-[58%_12%]"
            />
          </div>
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#070a12] via-[#070a12]/88 to-[#070a12]/36 sm:from-[#070a12] sm:via-[#070a12]/76 sm:to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[min(52%,22rem)] bg-linear-to-t from-[#070a12] via-[#070a12]/50 to-transparent"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-2 overflow-hidden">
          <motion.div className="absolute inset-0">
            <div className="hero-orb hero-orb-a opacity-40" />
          </motion.div>
          <motion.div className="absolute inset-0">
            <div className="hero-orb hero-orb-b opacity-40" />
          </motion.div>
        </div>

        <motion.div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-4 pb-14 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
          <div>
            <motion.p
              style={{ x: badgeX, opacity: badgeOpacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-teal-200/90 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Open to impactful collaborations
            </motion.p>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              <motion.span
                style={{ x: titleLeftX, opacity: titleOpacity }}
                className="block overflow-hidden"
              >
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-teal-200 via-sky-200 to-violet-200 bg-clip-text text-transparent">
                  {site.name}
                </span>
              </motion.span>
              <motion.span
                style={{ x: titleRightX, opacity: titleOpacity }}
                className="block overflow-hidden"
              >
                <span className="text-zinc-500">— </span>
                {site.role}
              </motion.span>
            </h1>

            <motion.p
              style={{ x: taglineX, opacity: taglineOpacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:max-w-2xl sm:text-xl"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              style={{ x: ctaX, opacity: ctaOpacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#about"
                className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-teal-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:brightness-110 sm:w-auto"
              >
                View profile
              </a>
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
              >
                Selected work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
