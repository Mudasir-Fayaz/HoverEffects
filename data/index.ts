export { buttonsMeta } from "./buttons";
export { cardsMeta } from "./cards";
export { imagesMeta } from "./images";
export { linksMeta } from "./links";
export { iconsMeta } from "./icons";
export { navigationMeta } from "./navigation";
export { inputsMeta } from "./inputs";
export { badgesMeta } from "./badges";
export { tooltipsMeta } from "./tooltips";
export type { GroupMeta } from "./types";

import { buttonsMeta } from "./buttons";
import { cardsMeta } from "./cards";
import { imagesMeta } from "./images";
import { linksMeta } from "./links";
import { iconsMeta } from "./icons";
import { navigationMeta } from "./navigation";
import { inputsMeta } from "./inputs";
import { badgesMeta } from "./badges";
import { tooltipsMeta } from "./tooltips";
import type { GroupMeta } from "./types";

export const groups: GroupMeta[] = [
  buttonsMeta,
  cardsMeta,
  imagesMeta,
  linksMeta,
  iconsMeta,
  navigationMeta,
  inputsMeta,
  badgesMeta,
  tooltipsMeta,
];

export function getGroupBySlug(slug: string): GroupMeta | undefined {
  return groups.find((g) => g.slug === slug);
}
