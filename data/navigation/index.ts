import type { GroupMeta, HoverEffect } from "../types";
export { navExtra01 } from "./nav-extra-01";
export { navExtra02 } from "./nav-extra-02";
export { navExtra03 } from "./nav-extra-03";
export { navExtra04 } from "./nav-extra-04";
export { navExtra05 } from "./nav-extra-05";
export { navExtra06 } from "./nav-extra-06";
export { navExtra07 } from "./nav-extra-07";
export { navExtra08 } from "./nav-extra-08";
export { navExtra09 } from "./nav-extra-09";

export { navUnderline } from "./nav-underline";
export { navPill } from "./nav-pill";
export { navGlow } from "./nav-glow";

import { navUnderline } from "./nav-underline";
import { navPill } from "./nav-pill";
import { navGlow } from "./nav-glow";

import { navExtra01 } from "./nav-extra-01";
import { navExtra02 } from "./nav-extra-02";
import { navExtra03 } from "./nav-extra-03";
import { navExtra04 } from "./nav-extra-04";
import { navExtra05 } from "./nav-extra-05";
import { navExtra06 } from "./nav-extra-06";
import { navExtra07 } from "./nav-extra-07";
import { navExtra08 } from "./nav-extra-08";
import { navExtra09 } from "./nav-extra-09";
export const navigationEffects: HoverEffect[] = [
  navUnderline,
  navPill,
  navGlow,
  navExtra01,
  navExtra02,
  navExtra03,
  navExtra04,
  navExtra05,
  navExtra06,
  navExtra07,
  navExtra08,
  navExtra09,
];

export const navigationMeta: GroupMeta = {
  slug: "navigation",
  shortTitle: "Navigation",
  title: "Navigation Hover Effects",
  description: "Menu hover effects, tab indicators, and underline sliders",
  longDescription:
    "Smooth navigation hover effects including animated tab indicators, sliding underlines, menu item highlights, and active state transitions. Perfect for headers, sidebars, and tab bars.",
  keywords: [
    "navigation hover effects",
    "CSS nav animations",
    "tab indicator animation",
    "menu hover effects",
    "active link indicator",
    "slider nav effect",
    "Tailwind CSS navigation",
  ],
  ogImage: "/og/navigation.png",
  icon: "Navigation",
  image: "/images/illustration/navigation.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Navigation Hover Effects",
    description:
      "Premium CSS and React navigation hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/navigation",
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
          name: "Navigation Hover Effects",
          item: "https://hovereffects.in/category/navigation",
        },
      ],
    },
  },
};
