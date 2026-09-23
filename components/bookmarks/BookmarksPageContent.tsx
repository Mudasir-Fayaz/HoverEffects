"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react";
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
      <div className="max-w-6xl mx-auto pt-10">
        <div className="px-1.5">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 no-underline transition-colors duration-150 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Bookmarks
              </h1>
              <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
                Saved hover effects you can revisit and share later.
              </p>
            </div>
            {bookmarkedEffects.length > 0 && (
              <div className="hidden items-center gap-1.5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1.5 text-xs text-neutral-400 dark:text-neutral-500 sm:flex">
                <Bookmark className="h-3.5 w-3.5" />
                {bookmarkedEffects.length} saved
              </div>
            )}
          </div>
        </div>

        <div
          className="-mx-1.5 h-[10px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
            borderTop: "1px solid rgba(148,163,184,0.15)",
            borderBottom: "1px solid rgba(148,163,184,0.15)",
          }}
        />

        {categorySections.length > 0 ? (
          <div>
            {categorySections.map((section, i) => {
              const isWide =
                section.slug === "cards" || section.slug === "images";

              return (
                <section key={section.slug}>
                  {i > 0 && (
                    <div
                      className="-mx-1.5 h-[10px]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
                        backgroundSize: "10px 10px",
                        borderTop: "1px solid rgba(148,163,184,0.15)",
                        borderBottom: "1px solid rgba(148,163,184,0.15)",
                      }}
                    />
                  )}
                  <div className="mb-7 flex items-start justify-between gap-4 px-1.5 pt-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                          {section.title}
                        </h2>
                        <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                          {section.bookmarkedEffects.length}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-neutral-400 dark:text-neutral-500">
                        {section.description}
                      </p>
                    </div>
                    <Link
                      href={`/category/${section.slug}`}
                      className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 border border-neutral-200 dark:border-neutral-800 px-4 py-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 no-underline hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                      View all
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div
                    className={
                      isWide
                        ? "grid grid-cols-1 gap-1.5 p-1.5 sm:grid-cols-2 border-l border-r border-neutral-200/50 dark:border-neutral-700/50"
                        : "grid grid-cols-1 gap-1.5 p-1.5 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-neutral-200/50 dark:border-neutral-700/50"
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
          <div className="mx-1.5 sm:mx-1.5 border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-24 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
              <Bookmark className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
            </div>
            <p className="font-medium text-neutral-700 dark:text-neutral-300">No bookmarks yet</p>
            <p className="mx-auto mt-1 max-w-xs text-sm text-neutral-400 dark:text-neutral-500">
              Tap the bookmark icon on any effect card to save it here.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 bg-neutral-600 dark:bg-neutral-500 px-4 py-2 text-sm font-semibold text-white no-underline transition-all duration-200 hover:bg-neutral-700 dark:hover:bg-neutral-400"
              >
                Browse Effects
              </Link>
            </div>
          </div>
        )}
      </div>

      <CodeModal effect={selectedEffect} onClose={closeModal} />
    </main>
  );
}
