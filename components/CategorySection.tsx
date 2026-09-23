"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HoverEffect } from "@/lib/effects-data";
import EffectCard from "./EffectCard";
import { useInView } from "@/hooks/useInView";

interface CategorySectionProps {
  title: string;
  description: string;
  slug: string;
  effects: HoverEffect[];
  onViewCode: (effect: HoverEffect) => void;
  highlightedEffectId?: string | null;
}

export default function CategorySection({
  title,
  description,
  slug,
  effects,
  onViewCode,
  highlightedEffectId,
}: CategorySectionProps) {
  const { ref, inView } = useInView("300px");
  const preview = effects.slice(0, 6);

  return (
    <section ref={ref} className="py-10 border-b border-neutral-100/80 dark:border-neutral-800/80 last:border-0">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-7">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h2>
          <p className="mt-0.5 text-sm text-neutral-400 dark:text-neutral-500">{description}</p>
        </div>
        <Link
          href={`/category/${slug}`}
          className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 text-sm
            font-medium text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800
            rounded-xl no-underline
            hover:text-neutral-600 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800
            mt-0.5"
        >
          More
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {inView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 p-1.5">
          {preview.map((effect) => (
            <EffectCard
              key={effect.id}
              effect={effect}
              onViewCode={onViewCode}
              highlighted={highlightedEffectId === effect.id}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 p-1.5">
          {preview.map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-100/60 bg-white/60 h-48 animate-pulse"
            />
          ))}
        </div>
      )}
    </section>
  );
}
