"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import CursorIcon from "./CursorIcon";

const categoryLinks = [
  { href: "/category/buttons", label: "Buttons" },
  { href: "/category/cards", label: "Cards" },
  { href: "/category/images", label: "Images" },
  { href: "/category/links", label: "Links" },
  { href: "/category/icons", label: "Icons" },
  { href: "/category/navigation", label: "Navigation" },
  { href: "/category/inputs", label: "Inputs" },
  { href: "/category/badges", label: "Badges" },
  { href: "/category/tooltips", label: "Tooltips" },
];

export default function Footer() {
  const [titleGradientAngle, setTitleGradientAngle] = useState(180);

  const handleTitleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const ratioX = (event.clientX - bounds.left) / bounds.width;
    const clampedRatioX = Math.max(0, Math.min(1, ratioX));
    setTitleGradientAngle(90 + clampedRatioX * 180);
  };

  const handleTitleMouseLeave = () => {
    setTitleGradientAngle(180);
  };

  return (
    <footer
      id="about"
      className="relative overflow-hidden"
    >
      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-3 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 no-underline mb-3"
            >
            <CursorIcon className="w-5 h-5" />
            <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                HoverEffects
              </span>
            </Link>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed max-w-[200px]">
              Curated hover effects for modern UI. Free and open-source.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/bookmarks", label: "Bookmarks" },
                { href: "/#collections", label: "Collections" },
                { href: "https://github.com", label: "GitHub", external: true },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 dark:text-neutral-500 no-underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-400 dark:text-neutral-500 no-underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide">
              Browse
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 dark:text-neutral-500 no-underline hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between border-t border-neutral-200/50 dark:border-neutral-800/50 px-4 py-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Open Source
        </p>
        <p className="text-xs font-medium text-neutral-500">
          Built by{" "}
          <a
            href="https://mudasir.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            Mudasir Fayaz
          </a>
        </p>
      </div>

      <div
        className="w-full h-[10px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
          borderTop: "1px solid rgba(148,163,184,0.15)",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      />

      {/* Giant title */}
      <div
        className="relative z-10 mx-auto w-full px-3 sm:px-3 flex items-center justify-center"
        style={{ height: "clamp(4.5rem, 14vw, 12rem)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <motion.div
          style={{ zIndex: 1 }}
          onMouseMove={handleTitleMouseMove}
          onMouseLeave={handleTitleMouseLeave}
          className="relative flex items-center justify-center w-full will-change-transform"
        >
          <span
            className="block w-full text-center font-black leading-none tracking-[-0.04em] select-none text-transparent"
            style={{
              fontSize: "clamp(2.8rem, 12vw, 8rem)",
              WebkitTextStroke: "1px rgba(148, 163, 184, 0.14)",
              backgroundImage: `linear-gradient(${titleGradientAngle}deg, rgba(250, 250, 250, 0.98) 0%, rgba(212, 212, 212, 0.7) 42%, rgba(163, 163, 163, 0.5) 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              transition: "background-image 220ms ease",
            }}
          >
            HoverEffects
          </span>
        </motion.div>
      </div>

      <div
        className="w-full h-[10px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(315deg, rgba(148,163,184,0.25) 0, rgba(148,163,184,0.25) 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
          borderTop: "1px solid rgba(148,163,184,0.15)",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      />
    </footer>
  );
}
