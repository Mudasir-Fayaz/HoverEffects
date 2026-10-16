import type { HoverEffect } from "../types";

export const tooltipFadeUp: HoverEffect = {
  id: "tooltip-fade-up",
  title: "Fade Up",
  category: "tooltips",
  description: "Tooltip fades and springs up from the trigger on hover.",
  tags: ["tooltip", "fade", "slide", "spring"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function FadeUpTooltip() {
  return (
    <div className="relative inline-flex group">
      <button className="px-4 py-2 text-sm font-medium text-white
        bg-indigo-500 rounded-lg cursor-pointer
        transition-transform duration-150 hover:-translate-y-0.5">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[9999]
        px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
        shadow-sm shadow-slate-900/15 whitespace-nowrap pointer-events-none
        opacity-0 translate-y-1.5
        group-hover:opacity-100 group-hover:translate-y-0
        transition-[opacity,translate] duration-200
        ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        This is a tooltip
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2
          size-2 rotate-45 rounded-[1px] bg-slate-900" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-wrap">
  <button>Hover Me</button>
  <div class="tooltip">
    This is a tooltip
    <span class="tooltip-arrow"></span>
  </div>
</div>

<style>
.tooltip-wrap { position: relative; display: inline-flex; }
.tooltip-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: #6366f1; border: none;
  border-radius: 8px; cursor: pointer;
  transition: transform .15s ease;
}
.tooltip-wrap button:hover { transform: translateY(-2px); }
.tooltip {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  z-index: 9999;
  translate: -50% 6px;
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #fff; background: #0f172a; border-radius: 8px;
  box-shadow: 0 2px 6px rgba(15,23,42,.16);
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: opacity .2s, translate .2s cubic-bezier(.34,1.56,.64,1);
}
.tooltip-wrap:hover .tooltip {
  opacity: 1; translate: -50% 0;
}
.tooltip-arrow {
  position: absolute; bottom: -4px; left: 50%;
  translate: -50% 0; rotate: 45deg;
  width: 8px; height: 8px; border-radius: 1px;
  background: #0f172a;
}
</style>`,
};