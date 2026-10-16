"use client";

import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { searchEntries, catalogTotal, type SearchEntry } from "@/lib/search-index.generated";

interface RankedHit extends SearchEntry {
  score: number;
}

function rank(entry: SearchEntry, query: string): number {
  const title = entry.title.toLowerCase();
  const category = entry.categoryTitle.toLowerCase();
  const tags = entry.tags.join(" ").toLowerCase();
  const description = entry.description.toLowerCase();
  if (title === query) return 0;
  if (title.startsWith(query)) return 1;
  if (title.includes(query)) return 2;
  if (category.includes(query)) return 3;
  if (tags.includes(query)) return 4;
  if (description.includes(query)) return 5;
  return -1;
}

/** Split text into matched / unmatched segments for highlighting. */
function highlight(text: string, query: string) {
  if (!query) return [{ text, match: false }];
  const index = text.toLowerCase().indexOf(query);
  if (index < 0) return [{ text, match: false }];
  return [
    { text: text.slice(0, index), match: false },
    { text: text.slice(index, index + query.length), match: true },
    { text: text.slice(index + query.length), match: false },
  ].filter((part) => part.text.length > 0);
}

export default function ComponentSearch() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listboxId = useId();
  const statusId = useId();

  const trimmed = deferredQuery.trim().toLowerCase();
  const queryIsPending = trimmed !== query.trim().toLowerCase();

  const results = useMemo<RankedHit[]>(() => {
    if (!trimmed || queryIsPending) return [];
    return searchEntries
      .map((entry) => ({ entry, score: rank(entry, trimmed) }))
      .filter((candidate) => candidate.score >= 0)
      .sort((a, b) => a.score - b.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 10)
      .map(({ entry, score }) => ({ ...entry, score }));
  }, [trimmed, queryIsPending]);

  const isOpen = focused && query.trim().length > 0;
  const activeIndex = Math.min(selectedIndex, results.length - 1);

  const navigate = (hit: SearchEntry) => {
    setFocused(false);
    setQuery("");
    setSelectedIndex(-1);
    router.push(hit.path);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && results.length > 0) {
      event.preventDefault();
      setSelectedIndex((current) => Math.min(current + 1, results.length - 1));
    } else if (event.key === "ArrowUp" && results.length > 0) {
      event.preventDefault();
      setSelectedIndex((current) => Math.max(current - 1, 0));
    } else if (event.key === "Enter" && results.length > 0) {
      event.preventDefault();
      navigate(results[activeIndex >= 0 ? activeIndex : 0]);
    } else if (event.key === "Escape") {
      setFocused(false);
      setSelectedIndex(-1);
      inputRef.current?.blur();
    }
  };

  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <label htmlFor={`${listboxId}-input`} className="sr-only">
        Search hover effects
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--site-text-subtle)]" />
        <input
          ref={inputRef}
          id={`${listboxId}-input`}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          placeholder={`Search ${catalogTotal} effects by name, category, or tag...`}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-describedby={statusId}
          aria-activedescendant={
            isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          className="w-full border border-[var(--site-border)] bg-[var(--site-surface)] py-3 pl-10 pr-4 text-sm text-[var(--site-text)] outline-none placeholder:text-[var(--site-text-subtle)] focus:border-[var(--site-accent)] focus:ring-[3px] focus:ring-[var(--site-focus)]"
        />
      </div>

      <div id={statusId} className="sr-only" aria-live="polite">
        {queryIsPending ? "Searching" : trimmed ? `${results.length} matching effects` : ""}
      </div>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Effect results"
          className="search-dropdown absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto border border-[var(--site-border)] bg-[var(--site-surface-raised)] shadow-[0_18px_50px_var(--site-shadow)]"
        >
          {queryIsPending ? (
            <p className="px-4 py-5 text-center text-sm text-[var(--site-text-muted)]">
              Searching…
            </p>
          ) : results.length > 0 ? (
            results.map((hit, index) => (
              <button
                key={hit.id}
                id={`${listboxId}-option-${index}`}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                onClick={() => navigate(hit)}
                onPointerMove={() => setSelectedIndex(index)}
                className={`flex min-h-11 w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${
                  index === activeIndex ? "bg-[var(--site-accent-soft)]" : "bg-transparent"
                }`}
              >
                <span className="flex-1 truncate font-medium text-[var(--site-text)]">
                  {highlight(hit.title, trimmed).map((part, partIndex) =>
                    part.match ? (
                      <mark
                        key={partIndex}
                        className="bg-transparent font-semibold text-[var(--site-accent-text)]"
                      >
                        {part.text}
                      </mark>
                    ) : (
                      <span key={partIndex}>{part.text}</span>
                    ),
                  )}
                </span>
                <span className="shrink-0 bg-[var(--site-surface-subtle)] px-2 py-0.5 text-xs text-[var(--site-text-muted)]">
                  {hit.categoryTitle}
                </span>
              </button>
            ))
          ) : (
            <p className="px-4 py-5 text-center text-sm text-[var(--site-text-muted)]">
              No effects match “{query.trim()}”.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
