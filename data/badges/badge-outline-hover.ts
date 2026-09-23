import type { HoverEffect } from "../types";

export const badgeOutlineHover: HoverEffect = {
  id: "badge-outline-hover",
  title: "Outline Hover",
  category: "badges",
  description: "Filled badge converts to outline on hover.",
  tags: ["badge", "outline", "hover"],
  animationType: "color",
  complexity: "simple",
  react: `export default function OutlineHoverBadge() {
  return (
    <span className="inline-flex items-center px-3 py-1
      text-xs font-semibold rounded-full border-2
      bg-indigo-500 text-white border-indigo-500
      cursor-default transition-all duration-300
      hover:bg-transparent hover:text-indigo-500">
      Featured
    </span>
  );
}`,
  html: `<span class="badge-outline-hover">Featured</span>

<style>
.badge-outline-hover {
  display: inline-flex; align-items: center;
  padding: 4px 12px; font-size: 12px; font-weight: 600;
  border-radius: 999px; border: 2px solid #6366f1;
  background: #6366f1; color: #fff;
  cursor: default; transition: all 0.3s ease;
}
.badge-outline-hover:hover { background: transparent; color: #6366f1; }
</style>`,
};
