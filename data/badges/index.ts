import type { GroupMeta, HoverEffect } from "../types";
export { badgeExtra01 } from "./badge-extra-01";
export { badgeExtra02 } from "./badge-extra-02";
export { badgeExtra03 } from "./badge-extra-03";
export { badgeExtra04 } from "./badge-extra-04";
export { badgeExtra05 } from "./badge-extra-05";
export { badgeExtra06 } from "./badge-extra-06";
export { badgeExtra07 } from "./badge-extra-07";
export { badgeExtra08 } from "./badge-extra-08";

export { badgePulse } from "./badge-pulse";
export { badgeSlideFill } from "./badge-slide-fill";
export { badgeGlow } from "./badge-glow";
export { badgeOutlineHover } from "./badge-outline-hover";

import { badgePulse } from "./badge-pulse";
import { badgeSlideFill } from "./badge-slide-fill";
import { badgeGlow } from "./badge-glow";
import { badgeOutlineHover } from "./badge-outline-hover";

import { badgeExtra01 } from "./badge-extra-01";
import { badgeExtra02 } from "./badge-extra-02";
import { badgeExtra03 } from "./badge-extra-03";
import { badgeExtra04 } from "./badge-extra-04";
import { badgeExtra05 } from "./badge-extra-05";
import { badgeExtra06 } from "./badge-extra-06";
import { badgeExtra07 } from "./badge-extra-07";
import { badgeExtra08 } from "./badge-extra-08";
export const badgeEffects: HoverEffect[] = [
  badgePulse,
  badgeSlideFill,
  badgeGlow,
  badgeOutlineHover,
  badgeExtra01,
  badgeExtra02,
  badgeExtra03,
  badgeExtra04,
  badgeExtra05,
  badgeExtra06,
  badgeExtra07,
  badgeExtra08,
];

export const badgesMeta: GroupMeta = {
  slug: "badges",
  shortTitle: "Badges",
  title: "Badge Hover Effects",
  description: "Pulse, glow, slide-fill, and outline badge interactions",
  longDescription:
    "Polished badge hover effects including pulsing live indicators, gradient glows, slide-fill fills, and outline toggles. Perfect for status indicators, tags, and labels.",
  keywords: [
    "badge hover effects",
    "CSS badge animations",
    "pulsing badge",
    "glow badge",
    "status badge",
    "Tailwind CSS badges",
  ],
  ogImage: "/og/badges.png",
  icon: "Tag",
  image: "/images/illustration/badges.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Badge Hover Effects",
    description: "Premium CSS and React badge hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/badges",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Badge Hover Effects", item: "https://hovereffects.in/category/badges" },
      ],
    },
  },
};
