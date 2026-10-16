import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeCategoryGrid from "@/components/HomeCategoryGrid";
import { groups } from "@/data";
import { getEffectsByCategory } from "@/lib/effects-data";

const siteUrl = "https://hovereffects.in";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "HoverEffects — Curated Hover Effects for Modern UI" },
  description:
    "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
  openGraph: {
    title: "HoverEffects — Curated Hover Effects for Modern UI",
    description:
      "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
    url: siteUrl,
    siteName: "HoverEffects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HoverEffects — Curated Hover Effects for Modern UI",
    description:
      "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more. Copy-ready for production.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "HoverEffects",
    description:
      "A curated collection of CSS and React hover effects for buttons, cards, links, inputs, and more.",
    url: siteUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: groups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: group.title,
        url: `${siteUrl}/category/${group.slug}`,
        numberOfItems: getEffectsByCategory(group.slug).length,
      })),
    },
  };

  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <section id="categories" className="max-w-6xl mx-auto w-full pt-4">
        <HomeCategoryGrid />
      </section>
    </main>
  );
}
