"use client";

import { motion, useInView } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCanva,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRender,
  SiStripe,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaCode, FaDatabase, FaPenRuler, FaServer } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/content";
import { FadeIn } from "./fade-in";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.025 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 22 },
  },
};

const iconBySkill: Record<string, IconType> = {
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  "React Js": SiReact,
  NextJs: SiNextdotjs,
  NestJS: SiNestjs,
  Prisma: SiPrisma,
  CSS: SiCss,
  TailwindCss: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Figma: SiFigma,
  MaterialUI: SiMaterialdesign,
  "Node.Js": SiNodedotjs,
  "Express.Js": SiExpress,
  MongoDB: SiMongodb,
  Git: SiGit,
  "Git-hub": SiGithub,
  Postman: SiPostman,
  PostgreSql: SiPostgresql,
  Swagger: SiSwagger,
  SQL: FaDatabase,
  Canva: SiCanva,
  Photoshop: FaPenRuler,
  AdobeXD: FaPenRuler,
  Stripe: SiStripe,
  Render: SiRender,
  Vercel: SiVercel,
  Netilify: SiNetlify,
  HTML5: SiHtml5,
  JWT: FaServer,
  "MVC(Model View Controller)": FaCode,
};

const rainDrops = Array.from({ length: 34 }, (_, index) => {
  const skill = skills[index % skills.length];
  const Icon = iconBySkill[skill] ?? FaCode;
  return {
    key: `${skill}-${index}`,
    Icon,
    left: `${(index * 11.5 + (index % 3) * 3.8) % 100}%`,
    delay: (index % 10) * 0.12,
    duration: 3.2 + (index % 7) * 0.34,
    scale: 0.76 + (index % 5) * 0.07,
    size: 13 + (index % 4) * 2,
  };
});

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const [canRain, setCanRain] = useState(false);
  const idleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const clearIdleTimer = () => {
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    if (!isInView) {
      setCanRain(false);
      clearIdleTimer();
      return;
    }

    const scheduleRain = () => {
      clearIdleTimer();
      idleTimerRef.current = window.setTimeout(() => {
        setCanRain(true);
      }, 0);
    };

    const handleScroll = () => {
      setCanRain(false);
      scheduleRain();
    };
    setCanRain(false);
    scheduleRain();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearIdleTimer();
    };
  }, [isInView]);

  return (
    <>
      {isInView ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-110 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: canRain ? 1 : 0 }}
          transition={{ duration: canRain ? 0.45 : 0.8, ease: "easeOut" }}
        >
          {rainDrops.map((drop) => (
            <motion.span
              key={drop.key}
              className="absolute top-[-16vh] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#b9d4ff]/20 text-sky-100 shadow-lg shadow-sky-400/25 backdrop-blur-sm"
              style={{ left: drop.left }}
              animate={{
                opacity: [0, 1, 1, 0.55, 0],
                y: ["-16vh", "115vh"],
                x: [0, indexWobble(drop.delay) * 0.45, 0],
                scale: [drop.scale, drop.scale + 0.08, drop.scale],
              }}
              transition={{
                duration: drop.duration,
                ease: "linear",
                delay: drop.delay,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <drop.Icon size={drop.size} />
            </motion.span>
          ))}
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#070a12]/90 via-[#070a12]/55 to-transparent" />
        </motion.div>
      ) : null}

      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools and technologies I ship with
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A practical blend of frontend frameworks, backend APIs, databases, and design tooling used
            across real production systems.
          </p>
        </FadeIn>

        <motion.ul
          className="mt-12 flex flex-wrap gap-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={item}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-sm text-zinc-200 shadow-sm shadow-black/20 backdrop-blur transition hover:border-teal-400/35 hover:bg-teal-500/10 hover:text-teal-50"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}

function indexWobble(seed: number) {
  return Math.max(4, Math.round(seed * 10));
}
