"use client";

import { createContext, useRef, type ReactNode, type RefObject } from "react";

/** Scroll target for `useScroll` — the tall runway outside each sticky viewport */
export const StickyRunwayRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

type StickyScrollBandProps = {
  id?: string;
  /** Higher index draws on top while scrolling (covers previous band) */
  index: number;
  /** Shorter runway for the closing band */
  footer?: boolean;
  children: ReactNode;
};

export function StickyScrollBand({ id, index, footer, children }: StickyScrollBandProps) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const overlap = index > 0 && !footer;
  const z = 10 + index * 10;
  const runway = footer
    ? "min-h-[min(130vh,1200px)]"
    : overlap
      ? "min-h-[min(310vh,2900px)]"
      : "min-h-[min(250vh,2400px)]";

  return (
    <div
      ref={runwayRef}
      id={id}
      className={`relative ${runway} ${overlap ? "-mt-[min(88vh,40rem)] pt-[min(88vh,40rem)]" : ""}`}
      style={{ zIndex: z }}
    >
      <StickyRunwayRefContext.Provider value={runwayRef}>
        <div
          className={`sticky top-0 flex h-screen min-h-0 w-full flex-col overflow-hidden bg-[#070a12] scroll-mt-24 ${
            footer ? "justify-center" : ""
          }`}
        >
          {children}
        </div>
      </StickyRunwayRefContext.Provider>
    </div>
  );
}
