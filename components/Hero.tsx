"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ComponentSearch from "@/components/ComponentSearch";
import { catalogTotal, categorySummaries } from "@/lib/search-index.generated";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const commitPointer = () => {
    rafRef.current = null;
    const hero = heroRef.current;
    const target = targetRef.current;
    if (!hero || !target) return;
    hero.style.setProperty("--hero-x", `${target.x}%`);
    hero.style.setProperty("--hero-y", `${target.y}%`);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType !== "mouse") return;
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    targetRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(commitPointer);
    }
  };

  const handlePointerLeave = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--hero-x", "50%");
    hero.style.setProperty("--hero-y", "38%");
  };

  const stats = [
    { value: String(catalogTotal), label: "Effects" },
    { value: String(categorySummaries.length), label: "Categories" },
    { value: "Free", label: "Open source" },
  ];

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-texture relative overflow-hidden"
    >
      {/* Cursor-reactive dot field + accent spotlight (decorative, clipped). */}
      <div className="hero-texture-layer pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-3 pb-12 pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] bg-[var(--site-surface-subtle)] px-3 py-1.5 text-xs font-medium text-[var(--site-text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--site-accent)]" />
            Open source · Free forever
          </div>

          <h1 className="text-[2.5rem] font-black leading-[0.95] tracking-tight text-[var(--site-text)] sm:text-[3.2rem] lg:text-[3.9rem]">
            HoverEffects
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-snug text-[var(--site-text-muted)] sm:text-lg">
            Hover interactions you can preview, copy, and ship — with matching React and
            HTML source.
          </p>
        </div>

        <div className="mt-8 w-full">
          <ComponentSearch />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#categories"
            className="inline-flex min-h-11 items-center gap-1.5 bg-[var(--site-accent)] px-4 text-sm font-semibold text-[var(--site-accent-foreground)] no-underline transition-transform duration-150 active:scale-[0.98]"
          >
            Browse effects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/category"
            className="inline-flex min-h-11 items-center gap-1.5 border border-[var(--site-border)] px-4 text-sm font-semibold text-[var(--site-text)] no-underline transition-[border-color,transform] duration-150 hover:border-[var(--site-border-strong)] active:scale-[0.98]"
          >
            All categories
          </Link>
        </div>

        <ul className="mt-10 flex items-center justify-center gap-10 sm:gap-14">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center">
              <span className="block text-lg font-bold text-[var(--site-text)] sm:text-xl">
                {stat.value}
              </span>
              <span className="mt-0.5 block text-[11px] uppercase tracking-wide text-[var(--site-text-subtle)]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
