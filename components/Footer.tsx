"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

/**
 * One random text-hover interaction is picked on page load. Each variant is
 * pure CSS: targeted transitions on letter-spacing, transform, color, and
 * text-shadow only — no per-move JS, no layout shifts.
 */
const TITLE_EFFECTS = ["letterspace", "shadowlayers", "gradslide", "lift", "glow", "outline"];

const titleStyles = `
.footer-title{background:linear-gradient(180deg,var(--site-accent-hover),var(--site-accent))}
.footer-title .ft-word{color:var(--site-accent-foreground);font-size:clamp(2.4rem,11vw,8rem);font-weight:900;line-height:1;letter-spacing:-0.04em;white-space:nowrap;user-select:none;transition:letter-spacing .32s cubic-bezier(.22,1,.36,1),transform .32s cubic-bezier(.22,1,.36,1),color .3s ease,text-shadow .3s ease,background-position .45s ease}
.footer-title[data-ft="letterspace"]:hover .ft-word{letter-spacing:.01em}
.footer-title[data-ft="shadowlayers"]:hover .ft-word{transform:translateY(-3px);text-shadow:0 1px 0 rgba(0,0,0,.16),0 3px 0 rgba(0,0,0,.12),0 6px 0 rgba(0,0,0,.09),0 12px 22px rgba(0,0,0,.26)}
.footer-title[data-ft="gradslide"] .ft-word{background:linear-gradient(180deg,var(--site-accent-foreground) 0%,var(--site-accent-foreground) 50%,color-mix(in srgb,var(--site-accent-foreground) 40%,transparent) 100%);background-size:100% 200%;background-position:0 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
.footer-title[data-ft="gradslide"]:hover .ft-word{background-position:0 0}
.footer-title[data-ft="lift"]:hover .ft-word{transform:translateY(-4px);text-shadow:0 14px 24px rgba(0,0,0,.28)}
.footer-title[data-ft="glow"]:hover .ft-word{text-shadow:0 0 14px color-mix(in srgb,var(--site-accent-foreground) 55%,transparent),0 0 36px color-mix(in srgb,var(--site-accent-foreground) 28%,transparent)}
.footer-title[data-ft="outline"] .ft-word{color:transparent;-webkit-text-stroke:1.5px var(--site-accent-foreground)}
.footer-title[data-ft="outline"]:hover .ft-word{color:var(--site-accent-foreground)}
@supports not ((background-clip:text) or (-webkit-background-clip:text)){.footer-title[data-ft="gradslide"] .ft-word{background:none;color:var(--site-accent-foreground);-webkit-text-fill-color:currentColor}}
@media (prefers-reduced-motion: reduce){.footer-title .ft-word{transition:none!important;transform:none!important;text-shadow:none!important;letter-spacing:-0.04em!important}.footer-title[data-ft="gradslide"] .ft-word{background-position:0 100%!important}}
`;

export default function Footer() {
  const [titleEffect, setTitleEffect] = useState<string | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setTitleEffect(TITLE_EFFECTS[Math.floor(Math.random() * TITLE_EFFECTS.length)]);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <footer
      id="about"
      className="relative overflow-hidden"
    >
      <style>{titleStyles}</style>

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
            <span className="font-semibold text-sm text-[var(--site-text)]">
                HoverEffects
              </span>
            </Link>
            <p className="text-sm text-[var(--site-text-muted)] leading-relaxed max-w-[200px]">
              Curated hover effects for modern UI. Free and open-source.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--site-text)] mb-3 uppercase tracking-wide">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/bookmarks", label: "Bookmarks" },
                { href: "/#categories", label: "Collections" },
                { href: "https://github.com/Mudasir-Fayaz/HoverEffects", label: "GitHub", external: true },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--site-text-muted)] no-underline hover:text-[var(--site-text)] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--site-text-muted)] no-underline hover:text-[var(--site-text)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-sm font-semibold text-[var(--site-text)] mb-3 uppercase tracking-wide">
              Browse
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--site-text-muted)] no-underline hover:text-[var(--site-text)] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between border-t border-[var(--site-border)] px-4 py-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--site-text-subtle)]">
          Open Source
        </p>
        <p className="text-xs font-medium text-[var(--site-text-subtle)]">
          Built by{" "}
          <a
            href="https://mudasir.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--site-text)]"
          >
            Mudasir Fayaz
          </a>
        </p>
      </div>

      <div className="site-hatch w-full h-[10px] border-y" />

      {/* Giant title — accent band with a random text-hover interaction */}
      <div
        className="relative z-10 mx-auto w-full"
        style={{ height: "clamp(5rem, 16vw, 13rem)" }}
      >
        <div
          className="footer-title absolute inset-0 flex items-center justify-center px-3 sm:px-6"
          data-ft={titleEffect ?? undefined}
        >
          <span className="ft-word">HoverEffects</span>
        </div>
      </div>

      <div className="site-hatch w-full h-[10px] border-y" />
    </footer>
  );
}