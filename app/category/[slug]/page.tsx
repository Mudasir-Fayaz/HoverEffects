import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getGroupBySlug, groups } from "@/data";
import { getEffectsByCategory } from "@/lib/effects-data";
import CategoryPageContent from "@/components/category/CategoryPageContent";

type Props = { params: Promise<{ slug: string }> };
type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return groups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = getGroupBySlug(slug);

  if (!group) {
    return {
      title: "Category Not Found — HoverEffects",
      description: "The requested hover effects category does not exist.",
    };
  }

  return {
    title: `${group.title} — HoverEffects`,
    description: group.longDescription,
    keywords: group.keywords,
    openGraph: {
      title: `${group.title} — HoverEffects`,
      description: group.longDescription,
      url: `https://hovereffects.in/category/${group.slug}`,
      siteName: "HoverEffects",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${group.title} — HoverEffects`,
      description: group.longDescription,
    },
    alternates: {
      canonical: `https://hovereffects.in/category/${group.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const group = getGroupBySlug(slug);
  if (!group) {
    notFound();
  }

  const siteUrl = "https://hovereffects.in";
  const effects = getEffectsByCategory(slug);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${group.title} - HoverEffects`,
    description: group.longDescription,
    url: `${siteUrl}/category/${group.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: effects.map((effect, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: effect.title,
        url: `${siteUrl}/category/${group.slug}?effect=${effect.id}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Suspense fallback={null}>
        <CategoryPageContent
          slug={slug}
          title={group.title}
          description={group.description}
          effects={effects}
        />
      </Suspense>
    </>
  );
}
