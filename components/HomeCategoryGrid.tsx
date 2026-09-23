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
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 px-1.5">
        Browse Categories
      </h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 p-1.5">
        {categories.map((cat) => {
          const effects = getEffectsByCategory(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block border border-neutral-200
                dark:border-neutral-800 bg-white dark:bg-neutral-900 no-underline
                overflow-hidden outline-none
                hover:ring-[3px] hover:ring-neutral-400/40 dark:hover:ring-neutral-500/40
                focus-visible:ring-[3px] focus-visible:ring-neutral-400/40 dark:focus-visible:ring-neutral-500/40"
            >
              <div className="overflow-hidden bg-neutral-100/50 dark:bg-neutral-800 shadow-sm shadow-neutral-200/50 dark:shadow-neutral-700/50 flex items-center justify-center aspect-[4/3]">
                {(illustrationMap[cat.slug] ?? (() => null))()}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {effects.length} effect{effects.length !== 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
