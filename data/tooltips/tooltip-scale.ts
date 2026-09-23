import type { HoverEffect } from "../types";

export const tooltipScale: HoverEffect = {
  id: "tooltip-scale",
  title: "Scale In",
  category: "tooltips",
  description: "Tooltip scales up from zero on hover.",
  tags: ["tooltip", "scale", "zoom"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function ScaleTooltip() {
  return (
    <div className="relative inline-flex group">
      <button className="px-4 py-2 text-sm font-medium text-white
        bg-violet-500 rounded-lg cursor-pointer">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
        whitespace-nowrap pointer-events-none origin-bottom
        scale-75 opacity-0
        group-hover:scale-100 group-hover:opacity-100
        transition-all duration-200">
        Scales in!
        <div className="absolute top-full left-1/2 -translate-x-1/2
          border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-scale-wrap">
  <button>Hover Me</button>
  <div class="tooltip-scale">
    Scales in!
    <div class="tooltip-scale-arrow"></div>
  </div>
</div>

<style>
.tooltip-scale-wrap { position: relative; display: inline-flex; }
.tooltip-scale-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: #8b5cf6; border: none;
  border-radius: 8px; cursor: pointer;
}
.tooltip-scale {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%) scale(0.75);
  transform-origin: bottom center;
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #fff; background: #0f172a; border-radius: 8px;
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: all 0.2s ease;
}
.tooltip-scale-wrap:hover .tooltip-scale {
  opacity: 1; transform: translateX(-50%) scale(1);
}
.tooltip-scale-arrow {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 4px solid transparent; border-top-color: #0f172a;
}
</style>`,
};
