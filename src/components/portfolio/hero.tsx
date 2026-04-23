"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/lib/content";

type HeroProps = {
  lineOne?: string;
  rolePrimary?: string;
  roleSecondary?: string;
  roleSuffix?: string;
  taglinePrimary?: string;
  taglineSecondary?: string;
  imageA?: string;
  imageB?: string;
};

const DESKTOP_OFFSETS = ["start start", "end start"] as const;

export function Hero({
  lineOne = "Hi, I'm Subith",
  rolePrimary = "Full Stack",
  roleSecondary = "UI/UX",
  roleSuffix = "Developer",
  taglinePrimary = site.tagline,
  taglineSecondary = "Figma · AdobeXD · NextJs · React",
  imageA = site.heroBackgroundPrimarySrc,
  imageB = site.heroBackgroundSecondarySrc,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [...DESKTOP_OFFSETS],
  });

  // Flip happens fast at the start so "UI/UX" appears early.
  const flipProgress = useTransform(scrollYProgress, [0.02, 0.18], [0, 1]);

  // Hold hero motion until flip is done, then start scene movement.
  const sceneProgress = useTransform(scrollYProgress, [0.18, 1], [0, 1]);

  // Background transition is synced with the text flip.
  const imageAScale = useTransform(flipProgress, [0, 1], [1, 1.08]);
  const imageAOpacity = useTransform(flipProgress, [0, 1], [1, 1]);
  const imageBScale = useTransform(flipProgress, [0, 1], [1.06, 1.16]);
  const imageBOpacity = useTransform(flipProgress, [0, 1], [0, 1]);
  const overlayOpacity = useTransform(flipProgress, [0, 1], [0.06, 0.14]);

  // Subtle parallax keeps the composition feeling premium.
  const textY = useTransform(sceneProgress, [0, 1], [0, -42]);
  const textOpacity = useTransform(sceneProgress, [0, 1], [1, 0.96]);

  // 3D flip for role transition.
  const primaryRotateX = useTransform(flipProgress, [0, 1], [0, -90]);
  const primaryOpacity = useTransform(flipProgress, [0, 0.7, 1], [1, 1, 0]);
  const secondaryRotateX = useTransform(flipProgress, [0, 1], [90, 0]);
  const secondaryOpacity = useTransform(flipProgress, [0, 0.35, 1], [0, 0, 1]);
  const secondaryX = useTransform(flipProgress, [0, 1], [0, 0]);
  const taglinePrimaryRotateX = useTransform(flipProgress, [0, 1], [0, -90]);
  const taglinePrimaryOpacity = useTransform(flipProgress, [0, 0.7, 1], [1, 1, 0]);
  const taglineSecondaryRotateX = useTransform(flipProgress, [0, 1], [90, 0]);
  const taglineSecondaryOpacity = useTransform(flipProgress, [0, 0.35, 1], [0, 0, 1]);

  return (
    <section ref={sectionRef} aria-label="Introduction" className="relative h-[150vh] sm:h-[180vh] lg:h-[190vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageAScale, opacity: imageAOpacity, willChange: "transform, opacity" }}
          >
            <Image
              src={imageA}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_35%] sm:object-[center_35%]"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{ scale: imageBScale, opacity: imageBOpacity, willChange: "transform, opacity" }}
          >
            <Image
              src={imageB}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_35%] sm:object-[center_35%]"
            />
          </motion.div>
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#070a12]/95 via-[#070a12]/60 to-transparent"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-2 bg-linear-to-r from-black/75 via-black/58 to-transparent"
          style={{ opacity: overlayOpacity, willChange: "opacity" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-[min(52%,22rem)] bg-linear-to-t from-[#070a12]/90 via-[#070a12]/56 to-transparent"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-3 overflow-hidden">
          <div className="hero-orb hero-orb-a opacity-30" />
          <div className="hero-orb hero-orb-b opacity-28" />
        </div>

        <motion.div
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-start justify-center px-4 pt-24 text-center sm:items-center sm:justify-start sm:px-6 sm:pt-0 sm:text-left"
          style={{ y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
        >
          <div className="flex min-h-[calc(100vh-6rem)] max-w-4xl flex-col sm:min-h-0">
            <motion.p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-teal-200/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Open to impactful collaborations
            </motion.p>

            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">{lineOne}</span>
              <span className="mt-3 block perspective-[1000px] sm:mt-4">
                <span className="inline-flex flex-col items-center justify-center gap-1 leading-none sm:inline-flex sm:flex-row sm:items-center sm:justify-start sm:gap-3">
                  <span className="relative inline-grid h-[1em] min-w-[10ch] place-items-center leading-none sm:min-w-[7ch]">
                  <motion.span
                    className="absolute inset-0 flex whitespace-nowrap transform-3d items-center justify-center bg-linear-to-r from-teal-200 via-sky-200 to-violet-200 bg-clip-text text-transparent backface-hidden"
                    style={{
                      rotateX: primaryRotateX,
                      opacity: primaryOpacity,
                      willChange: "transform, opacity",
                    }}
                  >
                    {rolePrimary}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 flex whitespace-nowrap transform-3d items-center justify-center bg-linear-to-r from-sky-100 via-indigo-100 to-cyan-100 bg-clip-text text-transparent backface-hidden"
                    style={{
                      rotateX: secondaryRotateX,
                      opacity: secondaryOpacity,
                      x: secondaryX,
                      willChange: "transform, opacity",
                    }}
                  >
                    {roleSecondary}
                  </motion.span>
                  </span>
                  <span className="block leading-none text-white sm:inline-flex sm:items-center">{roleSuffix}</span>
                </span>
              </span>
            </h1>

            <motion.p className="mt-6 max-w-2xl text-base leading-snug text-zinc-300 sm:leading-relaxed sm:text-xl">
              <span className="block w-full perspective-[1000px]">
                <span className="relative grid min-h-[1.8em] w-full items-center sm:min-h-[1.5em]">
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center transform-3d backface-hidden sm:justify-start sm:whitespace-nowrap"
                    style={{
                      rotateX: taglinePrimaryRotateX,
                      opacity: taglinePrimaryOpacity,
                      willChange: "transform, opacity",
                    }}
                  >
                    {taglinePrimary}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center transform-3d backface-hidden sm:justify-start sm:whitespace-nowrap"
                    style={{
                      rotateX: taglineSecondaryRotateX,
                      opacity: taglineSecondaryOpacity,
                      willChange: "transform, opacity",
                    }}
                  >
                    {taglineSecondary}
                  </motion.span>
                </span>
              </span>
            </motion.p>

            <motion.div className="mt-50 flex flex-col items-center gap-3 pb-0 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-start sm:pb-0 sm:pt-0">
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
              <a
                href={site.resumeSrc}
                download={site.resumeDownloadName}
                className="inline-flex w-full items-center justify-center rounded-full border border-teal-300/30 bg-teal-400/10 px-6 py-2.5 text-sm font-medium text-teal-100 backdrop-blur transition hover:border-teal-200/45 hover:bg-teal-300/16 sm:w-auto"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
