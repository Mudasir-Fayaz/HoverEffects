import type { HoverEffect } from "../types";

export const iconRotate: HoverEffect = {
  id: "icon-rotate",
  title: "Spin Rotate",
  category: "icons",
  description: "Icon smoothly rotates 180° on hover.",
  tags: ["rotate", "spin", "icon"],
  animationType: "transform",
  complexity: "simple",
  react: `import { Settings } from "lucide-react";

export default function SpinRotateIcon() {
  return (
    <div className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
      transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-500/8 group">
      <Settings className="w-6 h-6 transition-transform duration-500 group-hover:rotate-180" />
    </div>
  );
}`,
  html: `<div class="icon-rotate">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
</div>
<style>
.icon-rotate { display: inline-flex; padding: 12px; border-radius: 12px; color: #64748b; cursor: pointer; transition: all 0.3s ease; }
.icon-rotate:hover { color: #6366f1; background: rgba(99,102,241,.08); }
.icon-rotate svg { transition: transform 0.5s ease; }
.icon-rotate:hover svg { transform: rotate(180deg); }
</style>`,
};
