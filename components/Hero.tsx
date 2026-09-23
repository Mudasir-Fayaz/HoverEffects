"use client";

import { useRef, type PointerEvent } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleShadowRafRef = useRef<number | null>(null);

  const setTitleShadow = (x: number, y: number) => {
    const titleEl = titleRef.current;
    if (!titleEl) return;
    const sx = -x;
    const sy = -y;
    titleEl.style.textShadow = `
      ${sx * 0.5}px ${sy * 0.5}px 0 rgba(148,163,184,0.18),
      ${sx * 1.2}px ${sy * 1.2}px 2px rgba(148,163,184,0.12),
      ${sx * 2.4}px ${sy * 2.4}px 6px rgba(148,163,184,0.08),
      ${sx * 4.0}px ${sy * 4.0}px 16px rgba(148,163,184,0.05),
      ${sx * 6.0}px ${sy * 6.0}px 30px rgba(148,163,184,0.03)
    `;
  };

  const handleTitlePointerMove = (event: PointerEvent<HTMLHeadingElement>) => {
    const titleEl = titleRef.current;
    if (!titleEl) return;
    const bounds = titleEl.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
    const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
    const x = Math.max(-1, Math.min(1, nx * 2)) * 12;
    const y = Math.max(-1, Math.min(1, ny * 2)) * 12;
    if (titleShadowRafRef.current !== null) {
      cancelAnimationFrame(titleShadowRafRef.current);
    }
    titleShadowRafRef.current = requestAnimationFrame(() => {
      setTitleShadow(x, y);
      titleShadowRafRef.current = null;
    });
  };

  const handleTitlePointerLeave = () => {
    if (titleShadowRafRef.current !== null) {
      cancelAnimationFrame(titleShadowRafRef.current);
      titleShadowRafRef.current = null;
    }
    setTitleShadow(0, 0);
  };

  return (
    <section className="relative overflow-hidden h-full">
      {/* ─── Center content ─── */}
      <div
        className="flex flex-col items-center justify-center min-h-[580px] max-w-6xl mx-auto px-3 sm:px-3 py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-5
              bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-medium 
              rounded-full border border-neutral-100 dark:border-neutral-700"
          >
            <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
            Open source · Free forever
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            onPointerMove={handleTitlePointerMove}
            onPointerLeave={handleTitlePointerLeave}
            className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] 
              font-black leading-[0.95] tracking-tight text-neutral-900 dark:text-neutral-100 transition-[text-shadow] duration-200 will-change-[text-shadow]"
            style={{
              textShadow:
                "0 1px 0 rgba(255,255,255,0.75), 0 4px 8px rgba(15,23,42,0.04)",
            }}
          >
            HoverEffects
          </h1>

          {/* Tagline */}
          <p
            className="mt-2 text-base sm:text-lg font-medium tracking-tight
              text-neutral-500 dark:text-neutral-400 leading-snug"
          >
            Make Every{" "}
            <span
              className="text-transparent bg-clip-text
                bg-gradient-to-r from-neutral-500 to-neutral-400 dark:from-neutral-400 dark:to-neutral-500"
            >
              Hover
            </span>{" "}
            Count
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-10 sm:gap-14"
        >
          {[
            { value: "100+", label: "Effects" },
            { value: "10+", label: "Categories" },
            { value: "Free", label: "Open Source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
