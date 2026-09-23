import type { GroupMeta, HoverEffect } from "../types";
export { inputExtra01 } from "./input-extra-01";
export { inputExtra02 } from "./input-extra-02";
export { inputExtra03 } from "./input-extra-03";
export { inputExtra04 } from "./input-extra-04";
export { inputExtra05 } from "./input-extra-05";
export { inputExtra06 } from "./input-extra-06";
export { inputExtra07 } from "./input-extra-07";
export { inputExtra08 } from "./input-extra-08";

export { inputBorderGlow } from "./input-border-glow";
export { inputFloatingLabel } from "./input-floating-label";
export { inputGradientFocus } from "./input-gradient-focus";
export { inputHighlightFill } from "./input-highlight-fill";

import { inputBorderGlow } from "./input-border-glow";
import { inputFloatingLabel } from "./input-floating-label";
import { inputGradientFocus } from "./input-gradient-focus";
import { inputHighlightFill } from "./input-highlight-fill";

import { inputExtra01 } from "./input-extra-01";
import { inputExtra02 } from "./input-extra-02";
import { inputExtra03 } from "./input-extra-03";
import { inputExtra04 } from "./input-extra-04";
import { inputExtra05 } from "./input-extra-05";
import { inputExtra06 } from "./input-extra-06";
import { inputExtra07 } from "./input-extra-07";
import { inputExtra08 } from "./input-extra-08";
export const inputEffects: HoverEffect[] = [
  inputBorderGlow,
  inputHighlightFill,
  inputGradientFocus,
  inputFloatingLabel,
  inputExtra01,
  inputExtra02,
  inputExtra03,
  inputExtra04,
  inputExtra05,
  inputExtra06,
  inputExtra07,
  inputExtra08,
];

export const inputsMeta: GroupMeta = {
  slug: "inputs",
  shortTitle: "Inputs",
  title: "Input Hover & Focus Effects",
  description: "Glowing borders, floating labels, and gradient focus effects",
  longDescription:
    "Interactive input field effects featuring glowing focus rings, floating labels, gradient borders, and subtle background fills. Perfect for forms, login screens, and search bars.",
  keywords: [
    "input hover effects",
    "CSS input animations",
    "floating label input",
    "focus ring effect",
    "form field effects",
    "Tailwind CSS inputs",
  ],
  ogImage: "/og/inputs.png",
  icon: "TextCursorInput",
  image: "/images/illustration/inputs.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Input Hover & Focus Effects",
    description: "Premium CSS and React input hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/inputs",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hovereffects.in" },
        { "@type": "ListItem", position: 2, name: "Input Hover & Focus Effects", item: "https://hovereffects.in/category/inputs" },
      ],
    },
  },
};
