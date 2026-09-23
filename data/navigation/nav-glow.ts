import type { HoverEffect } from "../types";

export const navGlow: HoverEffect = {
  id: "nav-glow-item",
  title: "Glow Item",
  category: "navigation",
  description: "Soft ambient glow highlights nav items on hover.",
  tags: ["glow", "navigation", "ambient"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function GlowItemNav() {
  return (
    <nav className="flex gap-2">
      {["Home", "About", "Contact"].map((link) => (
        <a key={link} href="#"
          className="text-slate-500 font-medium px-4 py-2 rounded-lg no-underline
            transition-all duration-300
            hover:text-indigo-500 hover:bg-indigo-500/8
            hover:shadow-[0_0_15px_rgba(99,102,241,.15)]">
          {link}
        </a>
      ))}
    </nav>
  );
}`,
  html: `<nav class="nav-glow">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<style>
.nav-glow { display: flex; gap: 8px; }
.nav-glow a { text-decoration: none; color: #64748b; font-weight: 500; padding: 8px 16px; border-radius: 8px; transition: all 0.3s ease; }
.nav-glow a:hover { color: #6366f1; background: rgba(99,102,241,.08); box-shadow: 0 0 15px rgba(99,102,241,.15); }
</style>`,
};
