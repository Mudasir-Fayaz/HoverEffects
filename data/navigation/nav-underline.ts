import type { HoverEffect } from "../types";

export const navUnderline: HoverEffect = {
  id: "nav-underline-slider",
  title: "Underline Slider",
  category: "navigation",
  description: "Underline slides in beneath nav items on hover.",
  tags: ["underline", "navigation", "slide"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function UnderlineSliderNav() {
  return (
    <nav className="flex gap-6">
      {["Home", "About", "Contact"].map((link) => (
        <a key={link} href="#"
          className="relative text-slate-500 font-medium pb-1 no-underline
            transition-colors duration-300 hover:text-indigo-500 group">
          {link}
          <span className="absolute bottom-0 left-0 h-0.5 w-0
            bg-indigo-500 group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
}`,
  html: `<nav class="nav-underline">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<style>
.nav-underline { display: flex; gap: 24px; }
.nav-underline a { position: relative; text-decoration: none; color: #64748b; font-weight: 500; padding-bottom: 4px; transition: color 0.3s ease; }
.nav-underline a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #6366f1; transition: width 0.3s ease; }
.nav-underline a:hover { color: #6366f1; }
.nav-underline a:hover::after { width: 100%; }
</style>`,
};
