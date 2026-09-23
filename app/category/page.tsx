import type { Metadata } from "next";
import { categories, getEffectsByCategory } from "@/lib/effects-data";
import CategoryIndexContent from "@/components/category/CategoryIndexContent";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "All Categories — HoverEffects",
  description:
    "Browse every HoverEffects category with curated previews from buttons, cards, inputs, tooltips, and more.",
  keywords: [
    "hover effects categories",
    "ui hover effects",
    "react hover effects",
    "tailwind hover effects",
  ],
  openGraph: {
    title: "All Categories — HoverEffects",
    description:
      "Browse every HoverEffects category with curated previews from buttons, cards, inputs, tooltips, and more.",
    url: "https://hovereffects.in/category",
    siteName: "HoverEffects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Categories — HoverEffects",
    description:
      "Browse every HoverEffects category with curated previews from buttons, cards, inputs, tooltips, and more.",
  },
  alternates: {
    canonical: "https://hovereffects.in/category",
  },
};

export default function CategoryIndexPage() {
  const siteUrl = "https://hovereffects.in";

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Categories - HoverEffects",
    description:
      "Browse every HoverEffects category with curated previews from buttons, cards, inputs, tooltips, and more.",
    url: `${siteUrl}/category`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.title,
        url: `${siteUrl}/category/${category.slug}`,
        numberOfItems: getEffectsByCategory(category.slug).length,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CategoryIndexContent />
    </>
  );
}
