"use client";

import Link from "next/link";
import { previewMap } from "@/components/previews";
import type { HoverEffect } from "@/lib/effects-data";

interface CategoryCardProps {
  slug: string;
  title: string;
  description: string;
  count: number;
  effects: HoverEffect[];
}

export default function CategoryCard({
  slug,
  title,
  description,
  count,
  effects,
}: CategoryCardProps) {
  const firstEffect = effects[0];
  const Preview = firstEffect ? previewMap[firstEffect.id] : null;

  return (
    <Link
      href={`/category/${slug}`}
      className="group block rounded-xl border border-neutral-100 bg-white overflow-hidden no-underline hover:border-neutral-200 hover:shadow-sm"
    >
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <span className="shrink-0 text-xs font-medium text-neutral-400">
            {count}
          </span>
        </div>
        <p className="text-xs text-neutral-400 line-clamp-1">{description}</p>
      </div>
      <div className="mt-3 mx-3 mb-3 h-32 sm:h-36 bg-neutral-50/80 rounded-lg flex items-center justify-center overflow-hidden">
        {Preview ? (
          <div className="[&>*]:pointer-events-none" style={{ transform: "scale(0.55)", transformOrigin: "center center" }}>
            <Preview />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-300 text-lg font-bold">{title[0]}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
