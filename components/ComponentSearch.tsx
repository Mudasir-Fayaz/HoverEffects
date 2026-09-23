"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { effects, categories } from "@/lib/effects-data";

interface SearchHit {
  id: string;
  title: string;
  category: string;
  categoryTitle: string;
}

const categoryTitleMap = Object.fromEntries(
  categories.map((c) => [c.slug, c.title]),
);

export default function ComponentSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchHit[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const q = query.trim().toLowerCase();
      if (!q) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      const hits: SearchHit[] = [];
      for (const effect of effects) {
        if (hits.length >= 10) break;
        if (effect.title.toLowerCase().includes(q)) {
          hits.push({
            id: effect.id,
            title: effect.title,
            category: effect.category,
            categoryTitle: categoryTitleMap[effect.category] || effect.category,
          });
        }
      }
      setResults(hits);
      setIsOpen(hits.length > 0);
      setSelectedIndex(-1);
    }, 200);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useCallback(
    (hit: SearchHit) => {
      setIsOpen(false);
      setQuery("");
      router.push(`/category/${hit.category}?effect=${hit.id}`);
    },
    [router],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      navigate(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder="Search effects..."
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 outline-none focus:ring-[3px] focus:ring-neutral-400/40 dark:focus:ring-neutral-500/40 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-dropdown absolute top-full mt-1 left-0 right-0 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg dark:shadow-neutral-900/50 overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((hit, i) => (
            <button
              key={hit.id}
              onClick={() => navigate(hit)}
              onMouseEnter={() => setSelectedIndex(i)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm ${
                i === selectedIndex ? "bg-neutral-50 dark:bg-neutral-800" : "bg-white dark:bg-neutral-900"
              }`}
            >
              <span className="flex-1 font-medium text-neutral-800 dark:text-neutral-200 truncate">
                {hit.title}
              </span>
              <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5">
                {hit.categoryTitle}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
