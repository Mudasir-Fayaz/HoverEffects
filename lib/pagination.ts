import type { HoverEffect } from "./effects-data";

/** Number of effects rendered per category page. */
export const PAGE_SIZE = 30;

export function pageCountFor(total: number): number {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

export function sliceForPage(effects: HoverEffect[], page: number): HoverEffect[] {
  const start = (page - 1) * PAGE_SIZE;
  return effects.slice(start, start + PAGE_SIZE);
}

/**
 * Canonical URL for a category page. Page 1 lives at the base route
 * (`/category/<slug>`); later pages live at `/category/<slug>/page/<n>`.
 */
export function categoryPagePath(slug: string, page: number): string {
  return page <= 1 ? `/category/${slug}` : `/category/${slug}/page/${page}`;
}

/** Page index (1-based) of the effect with the given id, or null. */
export function pageOfEffect(effects: HoverEffect[], id: string): number | null {
  const index = effects.findIndex((effect) => effect.id === id);
  if (index === -1) return null;
  return Math.floor(index / PAGE_SIZE) + 1;
}