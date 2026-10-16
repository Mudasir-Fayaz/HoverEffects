import CategoryPageHeader from "./CategoryPageHeader";

interface CategoryPageSkeletonProps {
  slug: string;
  title: string;
  description: string;
  /** Number of placeholder cards to mirror the effects rendered on this page. */
  count: number;
  page?: number;
  totalPages?: number;
}

interface SkeletonCardProps {
  showcase: boolean;
  tooltip: boolean;
}

function SkeletonCard({ showcase, tooltip }: SkeletonCardProps) {
  return (
    <div className="overflow-hidden border border-[var(--site-border)] bg-[var(--site-surface)]">
      {/* Header bar — title + action buttons */}
      <div className="flex items-center justify-between gap-3 bg-[var(--site-surface-subtle)] px-3 py-2">
        <div className="h-4 w-2/5 animate-pulse rounded-sm bg-[var(--site-border)]" />
        <div className="flex shrink-0 items-center gap-1 md:hidden">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="h-11 w-11 animate-pulse border border-[var(--site-border)] bg-[var(--site-surface)]"
            />
          ))}
        </div>
      </div>

      {/* Preview area */}
      <div
        className={`flex items-center justify-center overflow-hidden bg-white
          ${showcase ? "h-[280px]" : "min-h-40"}
          ${tooltip ? "min-h-56 pt-20" : ""}`}
      >
        <div className="h-9 w-28 animate-pulse rounded-md bg-neutral-200" />
      </div>

      {/* Footer bar — credit + code button */}
      <div className="flex items-center justify-between gap-3 bg-[var(--site-surface-subtle)] px-3 py-2">
        <div className="h-3 w-20 animate-pulse rounded-sm bg-[var(--site-border)]" />
        <div className="h-[30px] w-16 animate-pulse border border-[var(--site-border)] bg-[var(--site-surface)]" />
      </div>
    </div>
  );
}

/**
 * Loading fallback for the dynamic category routes.
 *
 * Mirrors `CategoryPageContent`'s layout (header, hatch divider, card grid and
 * pagination) so the static shell paints instantly and the live cards swap in
 * without a blank screen or layout shift.
 */
export default function CategoryPageSkeleton({
  slug,
  title,
  description,
  count,
  page = 1,
  totalPages = 1,
}: CategoryPageSkeletonProps) {
  // Same column/height rules the live grid uses, so the swap is seamless.
  const showcase = slug === "cards" || slug === "images";
  const tooltip = slug === "tooltips";
  const cardCount = Math.max(0, count);

  return (
    <main className="flex-1" aria-busy="true">
      <div className="max-w-6xl mx-auto pt-24 sm:pt-28">
        <div className="px-3 sm:px-3">
          <CategoryPageHeader
            slug={slug}
            title={title}
            description={description}
            effectCount={count}
            page={page}
            totalPages={totalPages}
          />
        </div>

        <div className="site-hatch h-[10px] border-y" />

        {cardCount > 0 ? (
          <>
            <div
              aria-hidden="true"
              className={
                showcase
                  ? "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 border-l border-r border-[var(--site-border)]"
                  : "grid grid-cols-1 gap-2.5 p-2.5 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-[var(--site-border)]"
              }
            >
              {Array.from({ length: cardCount }, (_, index) => (
                <SkeletonCard key={index} showcase={showcase} tooltip={tooltip} />
              ))}
            </div>
            {totalPages > 1 ? (
              <div aria-hidden="true" className="flex items-center justify-center gap-2 py-6">
                <span className="h-9 w-9 animate-pulse rounded-lg border border-[var(--site-border)] bg-[var(--site-surface-subtle)]" />
                <span className="h-9 w-9 animate-pulse rounded-lg border border-[var(--site-border)] bg-[var(--site-surface-subtle)]" />
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      <span role="status" className="sr-only">
        Loading {title} effects…
      </span>
    </main>
  );
}
