import type { HoverEffect } from "../types";

export const navPill: HoverEffect = {
  id: "nav-pill-bg",
  title: "Pill Background",
  category: "navigation",
  description: "Pill background highlight appears behind nav items on hover.",
  tags: ["pill", "background", "navigation"],
  animationType: "color",
  complexity: "simple",
  react: `export default function PillNav() {
  return (
    <nav className="flex gap-2 p-1 bg-slate-100 rounded-xl">
      {["Home", "About", "Contact"].map((link) => (
        <a key={link} href="#"
          className="text-slate-500 font-medium px-4 py-2 rounded-lg no-underline
            transition-all duration-300
            hover:text-indigo-500 hover:bg-white
            hover:shadow-[0_1px_3px_rgba(0,0,0,.08)]">
          {link}
        </a>
      ))}
    </nav>
  );
}`,
  html: `<nav class="nav-pill">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<style>
.nav-pill { display: flex; gap: 8px; padding: 4px; background: #f1f5f9; border-radius: 12px; }
.nav-pill a { text-decoration: none; color: #64748b; font-weight: 500; padding: 8px 16px; border-radius: 8px; transition: all 0.3s ease; }
.nav-pill a:hover { color: #6366f1; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
</style>`,
};
