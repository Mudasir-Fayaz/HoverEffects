import type { HoverEffect } from "../types";

export const tooltipGlass: HoverEffect = {
  id: "tooltip-glass",
  title: "Glass Tooltip",
  category: "tooltips",
  description: "Frosted glass tooltip appears on hover.",
  tags: ["tooltip", "glass", "blur", "frosted"],
  animationType: "opacity",
  complexity: "medium",
  react: `export default function GlassTooltip() {
  return (
    <div className="relative inline-flex group">
      <button className="px-4 py-2 text-sm font-medium
        text-white bg-linear-to-r from-indigo-500 to-violet-500
        rounded-lg cursor-pointer">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        px-3 py-1.5 text-xs font-medium text-slate-800
        backdrop-blur-md bg-white/60 border border-white/80
        rounded-lg shadow-lg whitespace-nowrap pointer-events-none
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200">
        Glassmorphism tooltip
        <div className="absolute top-full left-1/2 -translate-x-1/2
          border-4 border-transparent border-t-white/80" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-glass-wrap">
  <button>Hover Me</button>
  <div class="tooltip-glass">
    Glassmorphism tooltip
    <div class="tooltip-glass-arrow"></div>
  </div>
</div>

<style>
.tooltip-glass-wrap { position: relative; display: inline-flex; }
.tooltip-glass-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border: none; border-radius: 8px; cursor: pointer;
}
.tooltip-glass {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #1e293b;
  backdrop-filter: blur(12px); background: rgba(255,255,255,.6);
  border: 1px solid rgba(255,255,255,.8);
  border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,.08);
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: all 0.2s ease;
}
.tooltip-glass-wrap:hover .tooltip-glass {
  opacity: 1; transform: translateX(-50%) translateY(0);
}
.tooltip-glass-arrow {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 4px solid transparent; border-top-color: rgba(255,255,255,.8);
}
</style>`,
};
