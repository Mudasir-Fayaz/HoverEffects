"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { HoverEffect } from "@/lib/effects-data";
import EffectCard from "@/components/EffectCard";
import CodeModal from "@/components/CodeModal";
import { useCodeModal } from "@/hooks/useCodeModal";

interface CategoryPageContentProps {
  slug: string;
  title: string;
  description: string;
  effects: HoverEffect[];
}

export default function CategoryPageContent({
  slug,
  title,
  description,
  effects,
}: CategoryPageContentProps) {
  const { selectedEffect, openModal, closeModal } = useCodeModal();
  const searchParams = useSearchParams();
  const activeEffectId = searchParams.get("effect");

  useEffect(() => {
    if (activeEffectId) {
      const el = document.getElementById(activeEffectId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [activeEffectId]);

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="px-3 sm:px-3">
          <Link
            href="/category"
            className="mb-8 inline-flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 no-underline transition-colors duration-150 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Categories
          </Link>

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">{description}</p>
            <div className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
              {effects.length} effect{effects.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <div
          className="w-full h-[10px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
            borderTop: "1px solid rgba(148,163,184,0.15)",
            borderBottom: "1px solid rgba(148,163,184,0.15)",
          }}
        />

        {effects.length > 0 ? (
          <div
            className={
              slug === "cards" || slug === "images"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-1.5 border-l border-r border-neutral-200/50 dark:border-neutral-700/50"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 p-1.5 border-l border-r border-neutral-200/50 dark:border-neutral-700/50"
            }
          >
            {effects.map((effect) => (
              <EffectCard
                key={effect.id}
                effect={effect}
                onViewCode={openModal}
                highlighted={activeEffectId === effect.id}
              />
            ))}
          </div>
        ) : (
          <div className="mx-1.5 sm:mx-1.5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-20 text-center">
            <p className="text-base text-neutral-400 dark:text-neutral-400">
              No effects in this category yet.
            </p>
            <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
              Check back soon — we&apos;re adding new effects regularly!
            </p>
          </div>
        )}
      </div>

      <CodeModal effect={selectedEffect} onClose={closeModal} />
    </main>
  );
}
