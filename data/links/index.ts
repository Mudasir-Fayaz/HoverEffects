import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export { textUnderline } from "./text-underline";
export { textGradient } from "./text-gradient";
export { textHighlight } from "./text-highlight";

import { textUnderline } from "./text-underline";
import { textGradient } from "./text-gradient";
import { textHighlight } from "./text-highlight";

export const linkEffects: HoverEffect[] = [
  textUnderline,
  textHighlight,
  textGradient,
  ...expandedEffectsByCategory.links,
];

export const linksMeta: GroupMeta = {
  slug: "links",
  shortTitle: "Links",
  title: "Link & Text Hover Effects",
  description: "Underline animations and sliding highlight effects",
  longDescription:
    "Elegant link and text hover effects featuring animated underlines, sliding highlights, color reveals, and split-text transitions. Perfect for navigation and editorial design.",
  keywords: [
    "link hover effects",
    "text hover animations",
    "underline animation CSS",
    "sliding highlight",
    "text reveal hover",
    "CSS text effects",
    "Tailwind CSS links",
  ],
  ogImage: "/og/links.png",
  icon: "Type",
  image: "/images/illustration/links.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Link & Text Hover Effects",
    description:
      "Premium CSS and React link and text hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/links",
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
          name: "Link & Text Hover Effects",
          item: "https://hovereffects.in/category/links",
        },
      ],
    },
  },
};
