import type { GroupMeta, HoverEffect } from "../types";
export { imageExtra01 } from "./image-extra-01";
export { imageExtra02 } from "./image-extra-02";
export { imageExtra03 } from "./image-extra-03";
export { imageExtra04 } from "./image-extra-04";
export { imageExtra05 } from "./image-extra-05";
export { imageExtra06 } from "./image-extra-06";

export { imageZoom } from "./image-zoom";
export { imageReveal } from "./image-reveal";
export { imageOverlay } from "./image-overlay";
export { imageGrayscale } from "./image-grayscale";
export { imageShineSweep } from "./image-shine";
export { imageBlurReveal } from "./image-blur";

import { imageZoom } from "./image-zoom";
import { imageReveal } from "./image-reveal";
import { imageOverlay } from "./image-overlay";
import { imageGrayscale } from "./image-grayscale";
import { imageShineSweep } from "./image-shine";
import { imageBlurReveal } from "./image-blur";

import { imageExtra01 } from "./image-extra-01";
import { imageExtra02 } from "./image-extra-02";
import { imageExtra03 } from "./image-extra-03";
import { imageExtra04 } from "./image-extra-04";
import { imageExtra05 } from "./image-extra-05";
import { imageExtra06 } from "./image-extra-06";
export const imageEffects: HoverEffect[] = [
  imageZoom,
  imageOverlay,
  imageGrayscale,
  imageBlurReveal,
  imageShineSweep,
  imageReveal,
  imageExtra01,
  imageExtra02,
  imageExtra03,
  imageExtra04,
  imageExtra05,
  imageExtra06,
];

export const imagesMeta: GroupMeta = {
  slug: "images",
  shortTitle: "Images",
  title: "Image Hover Effects",
  description: "Zoom, overlay, grayscale to color, and blur reveal effects",
  longDescription:
    "Stunning image hover effects including zoom reveals, color transitions from grayscale, blur-to-focus effects, and creative overlay animations. Ideal for galleries and portfolios.",
  keywords: [
    "image hover effects",
    "CSS image animations",
    "hover image zoom",
    "grayscale to color",
    "image overlay effect",
    "blur reveal",
    "Tailwind CSS images",
  ],
  ogImage: "/og/images.png",
  icon: "Image",
  image: "/images/illustration/images.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Image Hover Effects",
    description:
      "Premium CSS and React image hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/images",
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
          name: "Image Hover Effects",
          item: "https://hovereffects.in/category/images",
        },
      ],
    },
  },
};
