import Link from "next/link";
import { categoryPagePath } from "@/lib/pagination";

interface CategoryPageHeaderProps {
  slug: string;
  title: string;
  description: string;
  effectCount: number;
  page?: number;
  totalPages?: number;
}

/**
 * Shared category page heading (breadcrumb, title, count badge, description).
 *
 * Rendered by both the live page content and its loading skeleton so the
 * static fallback and the hydrated page paint the same above-the-fold layout.
 */
export default function CategoryPageHeader({
  slug,
  title,
  description,
  effectCount,
  page = 1,
  totalPages = 1,
}: CategoryPageHeaderProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-[var(--site-text-muted)]">
        <Link href="/" className="no-underline transition-colors duration-150 hover:text-[var(--site-text)]">
          Home
        </Link>
        <span aria-hidden="true" className="text-[var(--site-text-subtle)]">/</span>
        <Link href="/category" className="no-underline transition-colors duration-150 hover:text-[var(--site-text)]">
          Categories
        </Link>
        <span aria-hidden="true" className="text-[var(--site-text-subtle)]">/</span>
        {page > 1 ? (
          <>
            <Link
              href={categoryPagePath(slug, 1)}
              className="no-underline transition-colors duration-150 hover:text-[var(--site-text)]"
            >
              {title}
            </Link>
            <span aria-hidden="true" className="text-[var(--site-text-subtle)]">/</span>
            <span className="text-[var(--site-text)]">Page {page}</span>
          </>
        ) : (
          <span className="text-[var(--site-text)]">{title}</span>
        )}
      </nav>

      <div className="mb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-3xl font-bold text-[var(--site-text)] sm:text-4xl">
            {title}
            {page > 1 ? <span className="text-[var(--site-text-muted)]"> — {page}</span> : null}
          </h1>
          <span className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--site-text-muted)]">
            {effectCount} effect{effectCount !== 1 ? "s" : ""}
            {totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-base text-[var(--site-text-muted)]">{description}</p>
      </div>
    </>
  );
}
