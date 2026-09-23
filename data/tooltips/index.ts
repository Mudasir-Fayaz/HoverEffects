import type { GroupMeta, HoverEffect } from "../types";
export { tooltipExtra01 } from "./tooltip-extra-01";
export { tooltipExtra02 } from "./tooltip-extra-02";
export { tooltipExtra03 } from "./tooltip-extra-03";
export { tooltipExtra04 } from "./tooltip-extra-04";
export { tooltipExtra05 } from "./tooltip-extra-05";
export { tooltipExtra06 } from "./tooltip-extra-06";
export { tooltipExtra07 } from "./tooltip-extra-07";
export { tooltipExtra08 } from "./tooltip-extra-08";
export { tooltipExtra09 } from "./tooltip-extra-09";

export { tooltipFadeUp } from "./tooltip-fade-up";
export { tooltipScale } from "./tooltip-scale";
export { tooltipGlass } from "./tooltip-glass";

import { tooltipFadeUp } from "./tooltip-fade-up";
import { tooltipScale } from "./tooltip-scale";
import { tooltipGlass } from "./tooltip-glass";

import { tooltipExtra01 } from "./tooltip-extra-01";
import { tooltipExtra02 } from "./tooltip-extra-02";
import { tooltipExtra03 } from "./tooltip-extra-03";
import { tooltipExtra04 } from "./tooltip-extra-04";
import { tooltipExtra05 } from "./tooltip-extra-05";
import { tooltipExtra06 } from "./tooltip-extra-06";
import { tooltipExtra07 } from "./tooltip-extra-07";
import { tooltipExtra08 } from "./tooltip-extra-08";
import { tooltipExtra09 } from "./tooltip-extra-09";
export const tooltipEffects: HoverEffect[] = [
  tooltipFadeUp,
  tooltipScale,
  tooltipGlass,
  tooltipExtra01,
  tooltipExtra02,
  tooltipExtra03,
  tooltipExtra04,
  tooltipExtra05,
  tooltipExtra06,
  tooltipExtra07,
  tooltipExtra08,
  tooltipExtra09,
];

export const tooltipsMeta: GroupMeta = {
  slug: "tooltips",
  shortTitle: "Tooltips",
  title: "Tooltip Hover Effects",
  description: "Fade-up, scale-in, and glass tooltip styles",
  longDescription:
    "Smooth tooltip hover effects including animated fade-up, scale-in, and frosted glass styles. Drop-in components for any web project using Tailwind CSS or vanilla CSS.",
  keywords: [
    "tooltip hover effects",
    "CSS tooltip animations",
    "animated tooltip",
    "glass tooltip",
    "Tailwind CSS tooltips",
    "custom tooltip",
  ],
  ogImage: "/og/tooltips.png",
  icon: "MessageSquare",
  image: "/images/illustration/tooltips.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tooltip Hover Effects",
    description: "Premium CSS and React tooltip hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/tooltips",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Tooltip Hover Effects", item: "https://hovereffects.in/category/tooltips" },
      ],
    },
  },
};
