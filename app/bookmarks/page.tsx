import type { Metadata } from "next";
import BookmarksPageContent from "@/components/bookmarks/BookmarksPageContent";

const siteUrl = "https://hovereffects.in";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Bookmarks",
  description:
    "Your personal collection of saved hover effects. Bookmark your favorite CSS and React hover effects for quick access and sharing.",
  alternates: {
    canonical: `${siteUrl}/bookmarks`,
  },
  openGraph: {
    title: "Bookmarks — HoverEffects",
    description:
      "Your personal collection of saved hover effects. Bookmark your favorite CSS and React hover effects for quick access and sharing.",
    url: `${siteUrl}/bookmarks`,
    siteName: "HoverEffects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookmarks — HoverEffects",
    description:
      "Your personal collection of saved hover effects. Bookmark your favorite CSS and React hover effects for quick access and sharing.",
  },
};

export default function BookmarksPage() {
  const bookmarksSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bookmarks — HoverEffects",
    description:
      "Your personal collection of saved hover effects. Bookmark your favorite CSS and React hover effects for quick access and sharing.",
    url: `${siteUrl}/bookmarks`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookmarksSchema) }}
      />
      <BookmarksPageContent />
    </>
  );
}
