import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { getGroupBySlug, groups } from "@/data";
import { getEffectsByCategory } from "@/lib/effects-data";
import { pageCountFor, sliceForPage } from "@/lib/pagination";
import CategoryPageContent from "@/components/category/CategoryPageContent";
import CategoryPageSkeleton from "@/components/category/CategoryPageSkeleton";

type Props = { params: Promise<{ slug: string; page: string }> };

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  const params: Array<{ slug: string; page: string }> = [];
  for (const group of groups) {
    const pages = pageCountFor(getEffectsByCategory(group.slug).length);
    for (let page = 2; page <= pages; page++) {
      params.push({ slug: group.slug, page: String(page) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, page: pageParam } = await params;
  const page = Number(pageParam);
  const group = getGroupBySlug(slug);

  if (!group || !Number.isInteger(page) || page < 2) {
    return {
      title: "Category Not Found",
      description: "The requested hover effects page does not exist.",
    };
  }

  const url = `https://hovereffects.in/category/${slug}/page/${page}`;
  return {
    title: `${group.title} — ${page}`,
    description: group.longDescription,
    keywords: group.keywords,
    openGraph: {
      title: `${group.title} — ${page} — HoverEffects`,
      description: group.longDescription,
      url,
      siteName: "HoverEffects",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${group.title} — ${page} — HoverEffects`,
      description: group.longDescription,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPageRoute({ params }: Props) {
  const { slug, page: pageParam } = await params;
  const page = Number(pageParam);
  const group = getGroupBySlug(slug);
  if (!group) notFound();

  const totalEffects = getEffectsByCategory(slug);
  const totalPages = pageCountFor(totalEffects.length);

  // Page 1 is the base route; /page/1 is a canonical alias.
  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) redirect(`/category/${slug}`);
  if (page > totalPages) notFound();

  const effects = sliceForPage(totalEffects, page);

  return (
    <>
      <Suspense
        fallback={
          <CategoryPageSkeleton
            slug={slug}
            title={group.title}
            description={group.description}
            count={effects.length}
            page={page}
            totalPages={totalPages}
          />
        }
      >
        <CategoryPageContent
          slug={slug}
          title={group.title}
          description={group.description}
          effects={effects}
          effectIds={totalEffects.map((effect) => effect.id)}
          page={page}
          totalPages={totalPages}
        />
      </Suspense>
    </>
  );
}