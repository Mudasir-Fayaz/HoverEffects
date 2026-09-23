import type { GroupMeta, HoverEffect } from "../types";
export { iconExtra01 } from "./icon-extra-01";
export { iconExtra02 } from "./icon-extra-02";
export { iconExtra03 } from "./icon-extra-03";
export { iconExtra04 } from "./icon-extra-04";
export { iconExtra05 } from "./icon-extra-05";
export { iconExtra06 } from "./icon-extra-06";
export { iconExtra07 } from "./icon-extra-07";
export { iconExtra08 } from "./icon-extra-08";

export { iconRotate } from "./icon-rotate";
export { iconBounce } from "./icon-bounce";
export { iconPop } from "./icon-pop";
export { iconColorFill } from "./icon-color-fill";

import { iconRotate } from "./icon-rotate";
import { iconBounce } from "./icon-bounce";
import { iconPop } from "./icon-pop";
import { iconColorFill } from "./icon-color-fill";

import { iconExtra01 } from "./icon-extra-01";
import { iconExtra02 } from "./icon-extra-02";
import { iconExtra03 } from "./icon-extra-03";
import { iconExtra04 } from "./icon-extra-04";
import { iconExtra05 } from "./icon-extra-05";
import { iconExtra06 } from "./icon-extra-06";
import { iconExtra07 } from "./icon-extra-07";
import { iconExtra08 } from "./icon-extra-08";
export const iconEffects: HoverEffect[] = [
  iconRotate,
  iconBounce,
  iconColorFill,
  iconPop,
  iconExtra01,
  iconExtra02,
  iconExtra03,
  iconExtra04,
  iconExtra05,
  iconExtra06,
  iconExtra07,
  iconExtra08,
];

export const iconsMeta: GroupMeta = {
  slug: "icons",
  shortTitle: "Icons",
  title: "Icon Hover Effects",
  description: "Rotate, bounce, and color transition effects",
  longDescription:
    "Playful and refined icon hover effects including rotations, bounces, scale pulses, and smooth color transitions. Great for toolbars, nav items, and social links.",
  keywords: [
    "icon hover effects",
    "CSS icon animations",
    "hover icon rotate",
    "icon bounce effect",
    "SVG icon hover",
    "UI icon micro interactions",
    "Tailwind CSS icons",
  ],
  ogImage: "/og/icons.png",
  icon: "Sparkles",
  image: "/images/illustration/icons.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Icon Hover Effects",
    description:
      "Premium CSS and React icon hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/icons",
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
          name: "Icon Hover Effects",
          item: "https://hovereffects.in/category/icons",
        },
      ],
    },
  },
};
