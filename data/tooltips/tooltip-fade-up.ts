import type { HoverEffect } from "../types";

export const tooltipFadeUp: HoverEffect = {
  id: "tooltip-fade-up",
  title: "Fade Up",
  category: "tooltips",
  description: "Tooltip fades and slides up from the trigger on hover.",
  tags: ["tooltip", "fade", "slide"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function FadeUpTooltip() {
  return (
    <div className="relative inline-flex group">
      <button className="px-4 py-2 text-sm font-medium text-white
        bg-indigo-500 rounded-lg cursor-pointer">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
        whitespace-nowrap pointer-events-none
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200">
        This is a tooltip
        <div className="absolute top-full left-1/2 -translate-x-1/2
          border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-wrap">
  <button>Hover Me</button>
  <div class="tooltip">
    This is a tooltip
    <div class="tooltip-arrow"></div>
  </div>
</div>

<style>
.tooltip-wrap { position: relative; display: inline-flex; }
.tooltip-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: #6366f1; border: none;
  border-radius: 8px; cursor: pointer;
}
.tooltip {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #fff; background: #0f172a; border-radius: 8px;
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: all 0.2s ease;
}
.tooltip-wrap:hover .tooltip { opacity: 1; transform: translateX(-50%) translateY(0); }
.tooltip-arrow {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 4px solid transparent; border-top-color: #0f172a;
}
</style>`,
};
