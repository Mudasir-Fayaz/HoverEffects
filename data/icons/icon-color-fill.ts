import type { HoverEffect } from "../types";

export const iconColorFill: HoverEffect = {
  id: "icon-color-fill",
  title: "Color Fill",
  category: "icons",
  description: "Icon fills with red on hover as if liked.",
  tags: ["fill", "color", "heart"],
  animationType: "color",
  complexity: "simple",
  react: `import { Heart } from "lucide-react";

export default function ColorFillIcon() {
  return (
    <div className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
      transition-all duration-300 hover:text-red-500 group">
      <Heart className="w-6 h-6 transition-all duration-300
        group-hover:fill-red-500 group-hover:scale-110" />
    </div>
  );
}`,
  html: `<div class="icon-color-fill">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
</div>
<style>
.icon-color-fill { display: inline-flex; padding: 12px; border-radius: 12px; color: #64748b; cursor: pointer; transition: all 0.3s ease; }
.icon-color-fill:hover { color: #ef4444; }
.icon-color-fill:hover svg { fill: #ef4444; transform: scale(1.15); }
.icon-color-fill svg { transition: all 0.3s ease; }
</style>`,
};
