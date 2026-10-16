import type { HoverEffect } from "../types";

export const navGlow: HoverEffect = {
  id: "nav-glow-item",
  title: "Soft Tint",
  category: "navigation",
  description: "A quiet accent tint and a hairline inset ring settle behind the hovered item, with no glow spread.",
  tags: ["tint", "ring", "navigation", "subtle"],
  animationType: "color",
  complexity: "simple",
  react: `export default function SoftTintNav() {
  return (
    <nav className="flex gap-1" aria-label="Demo navigation">
      {["Home", "About", "Contact"].map((link) => (
        <a
          key={link}
          href="https://example.com"
          className="rounded-md px-3 py-1.5 text-sm font-medium no-underline outline-none
            text-slate-500 transition-all duration-300
            hover:bg-indigo-500/8 hover:text-indigo-600 hover:ring-1 hover:ring-inset hover:ring-indigo-500/25
            focus-visible:bg-indigo-500/8 focus-visible:text-indigo-600 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-indigo-500/25"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}`,
  html: `<nav class="nav-tint" aria-label="Demo navigation">
  <a href="https://example.com">Home</a>
  <a href="https://example.com">About</a>
  <a href="https://example.com">Contact</a>
</nav>
<style>
.nav-tint { display: flex; gap: 4px; }
.nav-tint a { text-decoration: none; color: #64748b; font-weight: 500; font-size: 14px; padding: 6px 12px; border-radius: 6px; transition: color .24s ease, background-color .24s ease, box-shadow .24s ease; }
.nav-tint a:hover, .nav-tint a:focus-visible { color: #4f46e5; background: rgba(79,70,229,.08); box-shadow: inset 0 0 0 1px rgba(79,70,229,.25); outline: none; }
@media (prefers-reduced-motion: reduce) { .nav-tint a { transition: none; } }
</style>`,
};
