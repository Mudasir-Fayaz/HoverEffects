import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";

export const imageEffects: HoverEffect[] = [...expandedEffectsByCategory.images];

export const imagesMeta: GroupMeta = {
  slug: "images",
  shortTitle: "Images",
  title: "Image Hover Effects",
  description: "Zoom, overlay, grayscale, and color filter effects",
  longDescription:
    "Stunning image hover effects including zoom reveals, color transitions from grayscale, brightness, contrast, saturation and hue filters, blur-to-focus reveals, and creative overlay animations. Ideal for galleries and portfolios.",
  keywords: [
    "image hover effects",
    "CSS image animations",
    "hover image zoom",
    "grayscale to color",
    "image filter hover",
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