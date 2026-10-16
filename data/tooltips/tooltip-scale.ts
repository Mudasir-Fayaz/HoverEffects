import type { HoverEffect } from "../types";

export const tooltipScale: HoverEffect = {
  id: "tooltip-scale",
  title: "Flip In",
  category: "tooltips",
  description: "Tooltip flips into view with a 3D rotation on hover.",
  tags: ["tooltip", "flip", "3d", "rotate"],
  animationType: "rotate",
  complexity: "medium",
  react: `export default function FlipTooltip() {
  return (
    <div className="relative inline-flex group [perspective:520px]">
      <button className="px-4 py-2 text-sm font-medium text-white
        bg-sky-500 rounded-lg cursor-pointer">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[9999]
        px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
        shadow-sm shadow-slate-900/15 whitespace-nowrap pointer-events-none origin-bottom
        rotate-x-90 backface-hidden opacity-0
        group-hover:rotate-x-0 group-hover:opacity-100
        transition-[opacity,rotate] duration-300
        ease-[cubic-bezier(0.4,1.15,0.4,1)]">
        Flips into view
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2
          size-2 rotate-45 rounded-[1px] bg-slate-900" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-flip-wrap">
  <button>Hover Me</button>
  <div class="tooltip-flip">
    Flips into view
    <span class="tooltip-flip-arrow"></span>
  </div>
</div>

<style>
.tooltip-flip-wrap { position: relative; display: inline-flex; perspective: 520px; }
.tooltip-flip-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: #0ea5e9; border: none;
  border-radius: 8px; cursor: pointer;
}
.tooltip-flip {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  z-index: 9999;
  translate: -50% 0; rotate: x 90deg;
  transform-origin: bottom center;
  backface-visibility: hidden;
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #fff; background: #0f172a; border-radius: 8px;
  box-shadow: 0 2px 6px rgba(15,23,42,.16);
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: opacity .3s, rotate .3s cubic-bezier(.4,1.15,.4,1);
}
.tooltip-flip-wrap:hover .tooltip-flip {
  opacity: 1; rotate: x 0deg;
}
.tooltip-flip-arrow {
  position: absolute; bottom: -4px; left: 50%;
  translate: -50% 0; rotate: 45deg;
  width: 8px; height: 8px; border-radius: 1px;
  background: #0f172a;
}
</style>`,
};