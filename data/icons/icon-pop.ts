import type { HoverEffect } from "../types";

export const iconPop: HoverEffect = {
  id: "icon-pop",
  title: "Pop Scale",
  category: "icons",
  description: "Icon scales up and fills with amber color on hover.",
  tags: ["pop", "scale", "fill"],
  animationType: "scale",
  complexity: "simple",
  react: `import { Star } from "lucide-react";

export default function PopScaleIcon() {
  return (
    <div className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
      transition-all duration-300 hover:text-amber-500 hover:scale-125 group">
      <Star className="w-6 h-6 transition-all duration-300 group-hover:fill-amber-500" />
    </div>
  );
}`,
  html: `<div class="icon-pop">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
</div>
<style>
.icon-pop { display: inline-flex; padding: 12px; border-radius: 12px; color: #64748b; cursor: pointer; transition: all 0.3s ease; }
.icon-pop:hover { color: #f59e0b; transform: scale(1.25); }
.icon-pop:hover svg { fill: #f59e0b; }
.icon-pop svg { transition: all 0.3s ease; }
</style>`,
};
