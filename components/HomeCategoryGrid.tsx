import React from "react";
import Link from "next/link";
import { categories } from "@/lib/effects-data";
import { getEffectsByCategory } from "@/lib/effects-data";
import {
  ButtonsIllustration,
  CardsIllustration,
  ImagesIllustration,
  LinksIllustration,
  IconsIllustration,
  NavigationIllustration,
  InputsIllustration,
  BadgesIllustration,
  TooltipsIllustration,
} from "@/components/illustrations";

const illustrationMap: Record<string, () => React.ReactElement> = {
  buttons: ButtonsIllustration,
  cards: CardsIllustration,
  images: ImagesIllustration,
  links: LinksIllustration,
  icons: IconsIllustration,
  navigation: NavigationIllustration,
  inputs: InputsIllustration,
  badges: BadgesIllustration,
  tooltips: TooltipsIllustration,
};

export default function HomeCategoryGrid() {
  return (
    <div>
      <h2 className="px-1.5 text-2xl font-bold text-[var(--site-text)]">
        Browse categories
      </h2>
      <div
        className="site-hatch h-[10px] border-y"
        style={{
          backgroundImage:
            "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
          borderTop: "1px solid rgba(148,163,184,0.15)",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 p-1.5">
        {categories.map((cat) => {
          const effects = getEffectsByCategory(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group block border border-[var(--site-border)] bg-[var(--site-surface)] no-underline
                overflow-hidden outline-none transition-[border-color,transform] duration-200
                hover:-translate-y-0.5 hover:border-[var(--site-accent-border)]
                focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-focus)]"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-[var(--site-border)] bg-[var(--site-art-bg)]">
                {(illustrationMap[cat.slug] ?? (() => null))()}
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[var(--site-text)]">
                    {cat.title}
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-[var(--site-text-subtle)]">
                    {effects.length}
                  </span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-xs text-[var(--site-text-muted)]">
                  {cat.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
