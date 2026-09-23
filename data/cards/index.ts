import type { GroupMeta, HoverEffect } from "../types";
export { cardExtra01 } from "./card-extra-01";
export { cardExtra02 } from "./card-extra-02";
export { cardExtra03 } from "./card-extra-03";
export { cardExtra04 } from "./card-extra-04";
export { cardExtra05 } from "./card-extra-05";
export { cardExtra06 } from "./card-extra-06";

export { cardElevation } from "./card-elevation";
export { cardBorderFlow } from "./card-border-flow";
export { cardTilt } from "./card-tilt";
export { cardInnerGlow } from "./card-inner-glow";
export { cardGlowBorder } from "./card-glow-border";
export { cardScaleShadow } from "./card-scale-shadow";

import { cardElevation } from "./card-elevation";
import { cardBorderFlow } from "./card-border-flow";
import { cardTilt } from "./card-tilt";
import { cardInnerGlow } from "./card-inner-glow";
import { cardGlowBorder } from "./card-glow-border";
import { cardScaleShadow } from "./card-scale-shadow";

import { cardExtra01 } from "./card-extra-01";
import { cardExtra02 } from "./card-extra-02";
import { cardExtra03 } from "./card-extra-03";
import { cardExtra04 } from "./card-extra-04";
import { cardExtra05 } from "./card-extra-05";
import { cardExtra06 } from "./card-extra-06";
export const cardEffects: HoverEffect[] = [
  cardElevation,
  cardGlowBorder,
  cardTilt,
  cardBorderFlow,
  cardScaleShadow,
  cardInnerGlow,
  cardExtra01,
  cardExtra02,
  cardExtra03,
  cardExtra04,
  cardExtra05,
  cardExtra06,
];

export const cardsMeta: GroupMeta = {
  slug: "cards",
  shortTitle: "Cards",
  title: "Card Hover Effects",
  description: "Elevation, tilt, glow, and border animation effects",
  longDescription:
    "Beautiful card hover effects featuring elevation lifts, 3D tilts, ambient glows, and animated border gradients. Perfect for portfolios, dashboards, and landing pages.",
  keywords: [
    "card hover effects",
    "CSS card animations",
    "React card components",
    "hover card lift",
    "3D card tilt",
    "glow card effect",
    "Tailwind CSS cards",
  ],
  ogImage: "/og/cards.png",
  icon: "LayoutGrid",
  image: "/images/illustration/cards.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Card Hover Effects",
    description:
      "Premium CSS and React card hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/cards",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hovereffects.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Card Hover Effects",
          item: "https://hovereffects.in/category/cards",
        },
      ],
    },
  },
};
