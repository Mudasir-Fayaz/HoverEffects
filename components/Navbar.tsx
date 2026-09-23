"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart, Star, Bookmark } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CursorIcon from "./CursorIcon";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6">
      <nav
        className="max-w-6xl mx-auto border border-neutral-200/60
          dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl
          px-4 sm:px-6 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 no-underline shrink-0"
          >
            <CursorIcon className="w-5 h-5" />
            <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
              HoverEffects
            </span>
          </Link>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/category"
              className={`text-sm font-medium px-3 py-1.5 no-underline
                ${
                  pathname === "/category"
                    ? "text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
            >
              Categories
            </Link>
            <ThemeToggle />
            <Link
              href="/bookmarks"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm
                font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200
                dark:border-neutral-800 no-underline
                hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="leading-none">Bookmarks</span>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm
                font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200
                dark:border-neutral-800 no-underline
                hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Star className="w-3.5 h-3.5" />
              <span className="leading-none">Star</span>
            </a>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm
                font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200
                dark:border-neutral-800
                hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5" />
              <span className="leading-none">Support</span>
            </button>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <Link
              href="/bookmarks"
              className="flex items-center justify-center w-8 h-8 text-neutral-500
                dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              aria-label="Bookmarks"
            >
              <Bookmark className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 text-neutral-500
                dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              aria-label="Star on GitHub"
            >
              <Star className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-8 h-8 text-neutral-500
                dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-3 pb-2 border-t border-neutral-100 dark:border-neutral-800 mt-3 flex flex-col gap-0.5">
                <Link
                  href="/category"
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-3 py-2 no-underline
                    ${
                      pathname === "/category"
                        ? "text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    }`}
                >
                  Categories
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium
                    text-neutral-600 dark:text-neutral-400
                    hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  <Heart className="w-4 h-4" />
                  <span className="leading-none">Support</span>
                </button>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
