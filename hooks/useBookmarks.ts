"use client";

import { useCallback, useEffect, useState } from "react";
import type { HoverEffect } from "@/lib/effects-data";

const STORAGE_KEY = "hovereffects.bookmarks.v1";

function readBookmarks(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return Array.from(
      new Set(
        parsed.filter((id): id is string => typeof id === "string" && id.length > 0),
      ),
    );
  } catch {
    return [];
  }
}

function writeBookmarks(ids: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  useEffect(() => {
    const syncFromStorage = () => {
      setBookmarkedIds(readBookmarks());
    };

    syncFromStorage();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        syncFromStorage();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const isBookmarked = useCallback(
    (id: string) => bookmarkedIds.includes(id),
    [bookmarkedIds],
  );

  const toggleBookmark = useCallback((effect: Pick<HoverEffect, "id">) => {
    setBookmarkedIds((current) => {
      const nextIds = current.includes(effect.id)
        ? current.filter((id) => id !== effect.id)
        : [...current, effect.id];

      writeBookmarks(nextIds);
      return nextIds;
    });
  }, []);

  return { bookmarkedIds, isBookmarked, toggleBookmark };
}
