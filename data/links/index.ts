import type { GroupMeta, HoverEffect } from "../types";
export { linkExtra01 } from "./link-extra-01";
export { linkExtra02 } from "./link-extra-02";
export { linkExtra03 } from "./link-extra-03";
export { linkExtra04 } from "./link-extra-04";
export { linkExtra05 } from "./link-extra-05";
export { linkExtra06 } from "./link-extra-06";
export { linkExtra07 } from "./link-extra-07";
export { linkExtra08 } from "./link-extra-08";
export { linkExtra09 } from "./link-extra-09";

export { textUnderline } from "./text-underline";
export { textGradient } from "./text-gradient";
export { textHighlight } from "./text-highlight";

import { textUnderline } from "./text-underline";
import { textGradient } from "./text-gradient";
import { textHighlight } from "./text-highlight";

import { linkExtra01 } from "./link-extra-01";
import { linkExtra02 } from "./link-extra-02";
import { linkExtra03 } from "./link-extra-03";
import { linkExtra04 } from "./link-extra-04";
import { linkExtra05 } from "./link-extra-05";
import { linkExtra06 } from "./link-extra-06";
import { linkExtra07 } from "./link-extra-07";
import { linkExtra08 } from "./link-extra-08";
import { linkExtra09 } from "./link-extra-09";
export const linkEffects: HoverEffect[] = [
  textUnderline,
  textHighlight,
  textGradient,
  linkExtra01,
  linkExtra02,
  linkExtra03,
  linkExtra04,
  linkExtra05,
  linkExtra06,
  linkExtra07,
  linkExtra08,
  linkExtra09,
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
