import type { HoverEffect } from "@/data/types";
import { buttonEffects } from "@/data/buttons";
import { cardEffects } from "@/data/cards";
import { imageEffects } from "@/data/images";
import { linkEffects } from "@/data/links";
import { iconEffects } from "@/data/icons";
import { navigationEffects } from "@/data/navigation";
import { inputEffects } from "@/data/inputs";
import { badgeEffects } from "@/data/badges";
import { tooltipEffects } from "@/data/tooltips";
import { groups } from "@/data";

export type { HoverEffect } from "@/data/types";

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const categories: Category[] = groups.map((g) => ({
  slug: g.slug,
  title: g.shortTitle,
  description: g.description,
  icon: g.icon,
  image: g.image,
}));

export const effects: HoverEffect[] = [
  ...buttonEffects,
  ...cardEffects,
  ...imageEffects,
  ...linkEffects,
  ...iconEffects,
  ...navigationEffects,
  ...inputEffects,
  ...badgeEffects,
  ...tooltipEffects,
];

export function getEffectsByCategory(slug: string): HoverEffect[] {
  return effects.filter((e) => e.category === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getEffectPath(effect: Pick<HoverEffect, "category" | "id">): string {
  return `/category/${effect.category}?effect=${effect.id}`;
}

export function getEffectUrl(
  effect: Pick<HoverEffect, "category" | "id">,
  origin?: string,
): string {
  const path = getEffectPath(effect);
  return origin ? new URL(path, origin).toString() : path;
}
