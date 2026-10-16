"use client";

import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { getEffectsByCategory, categories } from "@/lib/effects-data";
import EffectCard from "@/components/EffectCard";
import CodeModal from "@/components/CodeModal";
import { useCodeModal } from "@/hooks/useCodeModal";
import type { HoverEffect } from "@/lib/effects-data";

export default function BookmarksPageContent() {
  const { bookmarkedIds } = useBookmarks();
  const { selectedEffect, openModal, closeModal } = useCodeModal();

  const allEffectsFlat = categories.flatMap((cat) => getEffectsByCategory(cat.slug));
  const bookmarkedEffects = allEffectsFlat.filter((e) => bookmarkedIds.includes(e.id));

  const categorySections = categories
    .map((cat) => {
      const allEffects = getEffectsByCategory(cat.slug);
      const bookmarkedEffects = allEffects.filter((e) =>
        bookmarkedIds.includes(e.id),
      ) as HoverEffect[];
      return {
        ...cat,
        allEffects,
        bookmarkedEffects,
      };
    })
    .filter((s) => s.bookmarkedEffects.length > 0);

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto pt-24 sm:pt-28">
        <div className="px-3">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-[var(--site-text-muted)]">
            <Link href="/" className="no-underline transition-colors duration-150 hover:text-[var(--site-text)]">
              Home
            </Link>
            <span aria-hidden="true" className="text-[var(--site-text-subtle)]">/</span>
            <span className="text-[var(--site-text)]">Bookmarks</span>
          </nav>

          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[var(--site-text)] sm:text-4xl">
                Bookmarks
              </h1>
              <p className="mt-2 text-base text-[var(--site-text-muted)]">
                Saved hover effects you can revisit and share later.
              </p>
            </div>
            {bookmarkedEffects.length > 0 && (
              <div className="hidden items-center gap-1.5 border border-[var(--site-border)] bg-[var(--site-surface-subtle)] px-3 py-1.5 text-xs text-[var(--site-text-subtle)] sm:flex">
                <Bookmark className="h-3.5 w-3.5" />
                {bookmarkedEffects.length} saved
              </div>
            )}
          </div>
        </div>

        <div className="site-hatch h-[10px] border-y" />

        {categorySections.length > 0 ? (
          <div>
            {categorySections.map((section, i) => {
              const isWide =
                section.slug === "cards" || section.slug === "images";

              return (
                <section key={section.slug}>
                  {i > 0 && <div className="site-hatch h-[10px] border-y" />}
                  <div className="mb-6 flex items-start justify-between gap-4 px-3 pt-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-[var(--site-text)]">
                          {section.title}
                        </h2>
                        <span className="border border-[var(--site-border)] bg-[var(--site-surface-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--site-text-muted)]">
                          {section.bookmarkedEffects.length}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-[var(--site-text-subtle)]">
                        {section.description}
                      </p>
                    </div>
                    <Link
                      href={`/category/${section.slug}`}
                      className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 border border-[var(--site-border)] px-4 py-1.5 text-sm font-medium text-[var(--site-text-muted)] no-underline hover:border-[var(--site-accent-border)] hover:bg-[var(--site-surface-subtle)] hover:text-[var(--site-text)]"
                    >
                      View all
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div
                    className={
                      isWide
                        ? "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 border-l border-r border-[var(--site-border)]"
                        : "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-[var(--site-border)]"
                    }
                  >
                    {section.bookmarkedEffects.map((effect) => (
                      <EffectCard
                        key={effect.id}
                        effect={effect}
                        onViewCode={openModal}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="mx-1.5 sm:mx-1.5 border border-[var(--site-border)] bg-[var(--site-surface-subtle)] py-24 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-[var(--site-border)] bg-[var(--site-surface-subtle)]">
              <Bookmark className="h-5 w-5 text-[var(--site-text-subtle)]" />
            </div>
            <p className="font-medium text-[var(--site-text)]">No bookmarks yet</p>
            <p className="mx-auto mt-1 max-w-xs text-sm text-[var(--site-text-subtle)]">
              Tap the bookmark icon on any effect card to save it here.
            </p>
            <div className="mt-6">
              <Link
                href="/category"
                className="inline-flex items-center gap-1.5 bg-[var(--site-accent)] px-4 py-2 text-sm font-semibold text-[var(--site-accent-foreground)] no-underline transition-transform duration-150 active:scale-[0.98]"
              >
                Browse effects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <CodeModal effect={selectedEffect} onClose={closeModal} />
    </main>
  );
}
