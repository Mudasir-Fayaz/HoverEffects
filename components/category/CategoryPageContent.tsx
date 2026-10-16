"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { resolveEffectId, type HoverEffect } from "@/lib/effects-data";
import { PAGE_SIZE, categoryPagePath } from "@/lib/pagination";
import EffectCard from "@/components/EffectCard";
import CodeModal from "@/components/CodeModal";
import CategoryPageHeader from "@/components/category/CategoryPageHeader";
import { useCodeModal } from "@/hooks/useCodeModal";

interface CategoryPageContentProps {
  slug: string;
  title: string;
  description: string;
  effects: HoverEffect[];
  /** Full category id list (lightweight) used to resolve deep links across pages. */
  effectIds?: string[];
  page?: number;
  totalPages?: number;
}

export default function CategoryPageContent({
  slug,
  title,
  description,
  effects,
  effectIds,
  page = 1,
  totalPages = 1,
}: CategoryPageContentProps) {
  const { selectedEffect, openModal, closeModal } = useCodeModal();
  const router = useRouter();
  const searchParams = useSearchParams();
  // Accepts either the stable id (legacy links) or the descriptive slug.
  const activeEffectId = resolveEffectId(searchParams.get("effect"));

  useEffect(() => {
    if (!activeEffectId) return;
    const onThisPage = effects.some((effect) => effect.id === activeEffectId);
    if (!onThisPage && effectIds) {
      const targetPage = Math.floor(effectIds.indexOf(activeEffectId) / PAGE_SIZE) + 1;
      if (targetPage > 0 && targetPage !== page) {
        router.replace(`${categoryPagePath(slug, targetPage)}?effect=${activeEffectId}`);
        return;
      }
    }
    const el = document.getElementById(activeEffectId);
    if (el) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
  }, [activeEffectId, effects, effectIds, page, router, slug]);

  const pagination = totalPages > 1 ? (
    <nav
      aria-label={`${title} pages`}
      className="flex items-center justify-center gap-2 py-6"
    >
      {page > 1 ? (
        <Link
          href={`${categoryPagePath(slug, page - 1)}`}
          aria-label="Previous page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--site-border)] bg-[var(--site-surface)] text-[var(--site-text)] no-underline transition-colors duration-150 hover:border-[var(--site-border-strong)]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--site-border)] text-[var(--site-text-subtle)] opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </span>
      )}

      {page < totalPages ? (
        <Link
          href={`${categoryPagePath(slug, page + 1)}`}
          aria-label="Next page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--site-border)] bg-[var(--site-surface)] text-[var(--site-text)] no-underline transition-colors duration-150 hover:border-[var(--site-border-strong)]"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--site-border)] text-[var(--site-text-subtle)] opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  ) : null;

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto pt-24 sm:pt-28">
        <div className="px-3 sm:px-3">
          <CategoryPageHeader
            slug={slug}
            title={title}
            description={description}
            effectCount={effects.length}
            page={page}
            totalPages={totalPages}
          />
        </div>

        <div className="site-hatch h-[10px] border-y" />

        {effects.length > 0 ? (
          <>
            <div
              className={
                slug === "cards" || slug === "images"
                  ? "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 border-l border-r border-[var(--site-border)]"
                  : "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-[var(--site-border)]"
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
            {pagination}
          </>
        ) : (
          <div className="mx-2.5 border border-[var(--site-border)] bg-[var(--site-surface-subtle)] py-20 text-center">
            <p className="text-base text-[var(--site-text-muted)]">
              No effects in this category yet.
            </p>
            <p className="mt-1 text-sm text-[var(--site-text-subtle)]">
              Check back soon — we&apos;re adding new effects regularly.
            </p>
          </div>
        )}
      </div>

      <CodeModal effect={selectedEffect} onClose={closeModal} />
    </main>
  );
}