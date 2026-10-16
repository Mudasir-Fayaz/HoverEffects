import type { HoverEffect } from "../types";

export const navUnderline: HoverEffect = {
  id: "nav-underline-slider",
  title: "Underline Slider",
  category: "navigation",
  description: "A rounded underline grows from the left edge beneath each item, staying visible on the current link.",
  tags: ["underline", "navigation", "slide"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function UnderlineSliderNav() {
  const items = [
    { label: "Overview", current: true },
    { label: "Activity", current: false },
    { label: "Settings", current: false },
  ];
  return (
    <nav className="flex gap-6" aria-label="Demo navigation">
      {items.map((item) => (
        <a
          key={item.label}
          href="https://example.com"
          aria-current={item.current ? "page" : undefined}
          className="group/underline relative pb-1.5 text-sm font-medium no-underline outline-none
            transition-colors duration-300 hover:text-indigo-600 focus-visible:text-indigo-600
            text-slate-500"
        >
          {item.label}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-indigo-500
              transition-[width] duration-300 ease-out group-hover/underline:w-full group-focus-visible/underline:w-full"
          />
        </a>
      ))}
    </nav>
  );
}`,
  html: `<nav class="nav-underline" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Overview</a>
  <a href="https://example.com">Activity</a>
  <a href="https://example.com">Settings</a>
</nav>
<style>
.nav-underline { display: flex; gap: 24px; }
.nav-underline a { position: relative; text-decoration: none; color: #64748b; font-weight: 500; font-size: 14px; padding-bottom: 6px; transition: color .28s ease; outline: none; }
.nav-underline a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; border-radius: 2px; background: #6366f1; transition: width .3s cubic-bezier(.22,.61,.36,1); }
.nav-underline a:hover, .nav-underline a:focus-visible { color: #6366f1; }
.nav-underline a:hover::after, .nav-underline a:focus-visible::after, .nav-underline a[aria-current]::after { width: 100%; }
.nav-underline a[aria-current] { color: #6366f1; }
@media (prefers-reduced-motion: reduce) { .nav-underline a::after { transition: none; } }
</style>`,
};
