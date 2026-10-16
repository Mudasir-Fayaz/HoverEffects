"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, GitFork, Heart, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CursorIcon from "./CursorIcon";

const repositoryUrl = "https://github.com/Mudasir-Fayaz/HoverEffects";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLElement>(null);
  const categoriesActive = pathname.startsWith("/category");
  const bookmarksActive = pathname === "/bookmarks";

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileOpen]);

  const navLinkClass = (active: boolean) =>
    `inline-flex min-h-10 items-center gap-1.5 px-3 text-sm font-medium no-underline transition-[color,background-color,transform] duration-150 active:scale-[0.97] ${
      active
        ? "bg-[var(--site-accent-soft)] text-[var(--site-accent)]"
        : "text-[var(--site-text-muted)] hover:bg-[var(--site-surface-subtle)] hover:text-[var(--site-text)]"
    }`;

  return (
    <header ref={rootRef} className="fixed inset-x-0 top-1.5 z-50 px-2 sm:top-2 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-6xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-surface)_82%,transparent)] px-3 py-1.5 shadow-[0_1px_3px_var(--site-shadow)] backdrop-blur-xl sm:px-4"
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex min-h-10 shrink-0 items-center gap-2 px-1 no-underline"
            aria-label="HoverEffects home"
          >
            <CursorIcon className="h-5 w-5" />
            <span className="text-base font-semibold text-[var(--site-text)]">
              HoverEffects
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/category"
              className={navLinkClass(categoriesActive)}
              aria-current={categoriesActive ? "page" : undefined}
            >
              Categories
            </Link>
            <ThemeToggle />
            <Link
              href="/bookmarks"
              className={navLinkClass(bookmarksActive)}
              aria-current={bookmarksActive ? "page" : undefined}
            >
              <Bookmark className="h-3.5 w-3.5" />
              Bookmarks
            </Link>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass(false)}
            >
              <GitFork className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={`${repositoryUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass(false)}
            >
              <Heart className="h-3.5 w-3.5" />
              Feedback
            </a>
          </div>

          <div className="flex items-center gap-0.5 md:hidden">
            <ThemeToggle />
            <Link
              href="/bookmarks"
              className={`site-icon-button ${bookmarksActive ? "bg-[var(--site-accent-soft)] text-[var(--site-accent)]" : ""}`}
              aria-label="Bookmarks"
              aria-current={bookmarksActive ? "page" : undefined}
            >
              <Bookmark className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="site-icon-button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="mt-2 grid gap-1 border-t border-[var(--site-border)] pt-2 md:hidden"
          >
            <Link
              href="/category"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass(categoriesActive)}
              aria-current={categoriesActive ? "page" : undefined}
            >
              Categories
            </Link>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass(false)}
            >
              <GitFork className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              href={`${repositoryUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass(false)}
            >
              <Heart className="h-4 w-4" />
              Share feedback
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
