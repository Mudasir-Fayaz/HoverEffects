import type { HoverEffect } from "../types";

export const badgeSlideFill: HoverEffect = {
  id: "badge-slide-fill",
  title: "Slide Fill",
  category: "badges",
  description: "Background slides in to fill the badge on hover.",
  tags: ["badge", "slide", "fill"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function SlideFillBadge() {
  return (
    <span className="relative inline-flex items-center px-3 py-1
      text-xs font-semibold rounded-full overflow-hidden
      border border-indigo-500 text-indigo-500
      cursor-default transition-colors duration-300
      hover:text-white group">
      <span className="absolute inset-0 bg-indigo-500
        -translate-x-full group-hover:translate-x-0
        transition-transform duration-300" />
      <span className="relative">New</span>
    </span>
  );
}`,
  html: `<span class="badge-slide-fill">
  <span>New</span>
</span>

<style>
.badge-slide-fill {
  position: relative;
  display: inline-flex; align-items: center;
  padding: 4px 12px; font-size: 12px; font-weight: 600;
  border-radius: 999px; overflow: hidden;
  border: 1px solid #6366f1; color: #6366f1;
  cursor: default; transition: color 0.3s ease;
}
.badge-slide-fill::before {
  content: ''; position: absolute;
  inset: 0; background: #6366f1;
  transform: translateX(-100%); transition: transform 0.3s ease;
}
.badge-slide-fill:hover::before { transform: translateX(0); }
.badge-slide-fill:hover { color: #fff; }
.badge-slide-fill span { position: relative; z-index: 1; }
</style>`,
};
