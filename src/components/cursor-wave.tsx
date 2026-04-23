"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorWave() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 380, damping: 32, mass: 0.35 });
  const y = useSpring(mouseY, { stiffness: 380, damping: 32, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);

    return () => {
      media.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target;
      if (!(target instanceof Element)) {
        setHoveringInteractive(false);
        return;
      }

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='interactive']",
      );
      setHoveringInteractive(Boolean(interactive));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-999 hidden md:block"
      style={{ x, y }}
    >
      <motion.span
        className="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/45 bg-linear-to-br from-white/8 to-transparent backdrop-blur-[1px]"
        animate={{
          scale: pressed ? 0.86 : hoveringInteractive ? 1.28 : [1, 1.08, 1],
          opacity: pressed ? 0.8 : hoveringInteractive ? 0.95 : [0.65, 0.4, 0.65],
          rotate: hoveringInteractive ? 90 : 0,
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          opacity: { duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 0.28, ease: "easeOut" },
        }}
      />
      <motion.span
        className="absolute left-0 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-[circle_at_center] from-teal-300/30 via-sky-400/12 to-transparent"
        animate={{
          scale: pressed ? 0.74 : hoveringInteractive ? 1.42 : [1, 1.2, 1],
          opacity: pressed ? 0.25 : hoveringInteractive ? 0.55 : [0.38, 0.18, 0.38],
        }}
        transition={{
          scale: { duration: 0.22, ease: "easeOut" },
          opacity: { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />
      <motion.span
        className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-teal-200 via-sky-200 to-violet-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]"
        animate={{
          scale: pressed ? 0.58 : hoveringInteractive ? 0.9 : 1,
          opacity: pressed ? 0.8 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.span
        className="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-[35%] border border-violet-200/40"
        animate={{
          scale: pressed ? 0.72 : hoveringInteractive ? 1.05 : 0.92,
          opacity: hoveringInteractive ? 0.85 : 0.5,
          rotate: pressed ? 35 : hoveringInteractive ? 120 : 0,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
    </motion.div>
  );
}
