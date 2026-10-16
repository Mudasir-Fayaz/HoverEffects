import type { MetadataRoute } from "next";
import { groups } from "@/data";
import { getEffectsByCategory } from "@/lib/effects-data";
import { pageCountFor } from "@/lib/pagination";

const siteUrl = "https://hovereffects.in";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const groupPages: MetadataRoute.Sitemap = groups.flatMap((group) => {
    const pages = pageCountFor(getEffectsByCategory(group.slug).length);
    return Array.from({ length: pages }, (_, index) => ({
      url: `${siteUrl}/category/${group.slug}${index === 0 ? "" : `/page/${index + 1}`}`,
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 0.8 : 0.5,
    }));
  });

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/category`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...groupPages,
  ];
}