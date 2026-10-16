"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { HoverEffect } from "@/lib/effects-data";

const STORAGE_KEY = "hovereffects.bookmarks.v1";
const CHANGE_EVENT = "hovereffects:bookmarks-change";
const EMPTY_BOOKMARKS: string[] = [];
let cachedRaw: string | null | undefined;
let cachedBookmarks = EMPTY_BOOKMARKS;

function readBookmarks(): string[] {
  if (typeof window === "undefined") return EMPTY_BOOKMARKS;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedBookmarks;
    cachedRaw = raw;
    if (!raw) return (cachedBookmarks = EMPTY_BOOKMARKS);

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return (cachedBookmarks = EMPTY_BOOKMARKS);
    cachedBookmarks = Array.from(
      new Set(parsed.filter((id): id is string => typeof id === "string" && id.length > 0)),
    );
    return cachedBookmarks;
  } catch {
    return (cachedBookmarks = EMPTY_BOOKMARKS);
  }
}

function subscribe(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) callback();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function writeBookmarks(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    cachedRaw = undefined;
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // Bookmarks remain non-fatal when storage is unavailable.
  }
}

export function useBookmarks() {
  const bookmarkedIds = useSyncExternalStore(subscribe, readBookmarks, () => EMPTY_BOOKMARKS);

  const isBookmarked = useCallback(
    (id: string) => bookmarkedIds.includes(id),
    [bookmarkedIds],
  );

  const toggleBookmark = useCallback((effect: Pick<HoverEffect, "id">) => {
    const current = readBookmarks();
    writeBookmarks(
      current.includes(effect.id)
        ? current.filter((id) => id !== effect.id)
        : [...current, effect.id],
    );
  }, []);

  return { bookmarkedIds, isBookmarked, toggleBookmark };
}
