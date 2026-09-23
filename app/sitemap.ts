import type { MetadataRoute } from "next";
import { groups } from "@/data";

const siteUrl = "https://hovereffects.in";
const lastModified = new Date();

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const groupPages: MetadataRoute.Sitemap = groups.map((group) => ({
    url: `${siteUrl}/category/${group.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/category`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...groupPages,
  ];
}
