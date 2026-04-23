"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef, type ReactNode } from "react";
import { StickyRunwayRefContext } from "./sticky-scroll-band";

type Accent = "teal" | "sky" | "violet";

const blobA: Record<Accent, string> = {
  teal: "bg-teal-500/14",
  sky: "bg-sky-500/12",
  violet: "bg-violet-500/14",
};

const blobB: Record<Accent, string> = {
  teal: "bg-violet-600/11",
  sky: "bg-teal-500/10",
  violet: "bg-sky-500/10",
};

const blobDeep: Record<Accent, string> = {
  teal: "bg-linear-to-b from-teal-500/[0.07] via-transparent to-violet-600/[0.05]",
  sky: "bg-linear-to-b from-sky-500/[0.07] via-transparent to-teal-500/[0.05]",
  violet: "bg-linear-to-b from-violet-500/[0.07] via-transparent to-sky-500/[0.05]",
};

type ParallaxSectionProps = {
  className?: string;
  /** Peak parallax shift in px for mid layers */
  depth?: number;
  accent?: Accent;
  children: ReactNode;
};

export function ParallaxSection({
  className = "",
  depth = 64,
  accent = "teal",
  children,
}: ParallaxSectionProps) {
  const runwayRef = useContext(StickyRunwayRefContext);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const scrollTarget = runwayRef ?? fallbackRef;

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 34,
    mass: 0.35,
    restDelta: 0.0008,
  });

  const yDeep = useTransform(smooth, [0, 1], [depth * 0.22, -depth * 0.22]);
  const ySlow = useTransform(smooth, [0, 1], [depth * 0.55, -depth * 0.55]);
  const yFast = useTransform(smooth, [0, 1], [-depth * 0.38, depth * 0.38]);
  const lineScale = useTransform(smooth, [0, 0.15, 0.55, 1], [0.35, 1, 1, 0.45]);

  return (
    <div
      ref={fallbackRef}
      className={`relative flex h-full min-h-0 flex-1 flex-col overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <motion.div
          style={{ y: yDeep }}
          className={`absolute inset-x-[-30%] top-[12%] h-[55vh] max-h-[38rem] ${blobDeep[accent]} blur-2xl`}
        />
        <motion.div
          style={{ y: ySlow }}
          className={`absolute -left-[22%] top-[6%] h-[min(32rem,78vw)] w-[min(32rem,78vw)] rounded-full blur-3xl ${blobA[accent]}`}
        />
        <motion.div
          style={{ y: yFast }}
          className={`absolute -right-[20%] bottom-[2%] h-[min(28rem,72vw)] w-[min(28rem,72vw)] rounded-full blur-3xl ${blobB[accent]}`}
        />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-3 top-[min(28%,12rem)] h-[min(42vh,22rem)] w-px origin-top bg-linear-to-b from-teal-400/45 via-white/12 to-transparent sm:left-4"
        />
      </div>
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-y-contain">{children}</div>
    </div>
  );
}
