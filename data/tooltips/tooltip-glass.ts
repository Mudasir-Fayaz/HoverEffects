import type { HoverEffect } from "../types";

export const tooltipGlass: HoverEffect = {
  id: "tooltip-glass",
  title: "Wipe Reveal",
  category: "tooltips",
  description: "Tooltip wipes open from the bottom with a light sweep.",
  tags: ["tooltip", "wipe", "clip-path", "sweep"],
  animationType: "clip",
  complexity: "medium",
  react: `export default function WipeTooltip() {
  return (
    <div className="relative inline-flex group">
      <button className="px-4 py-2 text-sm font-medium text-white
        bg-linear-to-r from-violet-500 to-rose-500 rounded-lg cursor-pointer">
        Hover Me
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[9999]
        px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
        shadow-sm shadow-slate-900/15 whitespace-nowrap pointer-events-none overflow-hidden
        translate-y-2 [clip-path:inset(0_0_100%_0)]
        group-hover:translate-y-0 group-hover:[clip-path:inset(0_0_0_0)]
        transition-[clip-path,translate] duration-300 ease-out">
        Wipes open
        <span aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/2 -translate-x-[250%]
          bg-linear-to-r from-transparent via-white/25 to-transparent
          transition-transform duration-500 group-hover:translate-x-[250%]" />
        <span aria-hidden="true"
          className="absolute inset-x-2 bottom-0 h-px
          bg-linear-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </div>
  );
}`,
  html: `<div class="tooltip-wipe-wrap">
  <button>Hover Me</button>
  <div class="tooltip-wipe">
    Wipes open
  </div>
</div>

<style>
.tooltip-wipe-wrap { position: relative; display: inline-flex; }
.tooltip-wipe-wrap button {
  padding: 8px 16px; font-size: 14px; font-weight: 500;
  color: #fff; background: linear-gradient(90deg, #8b5cf6, #f43f5e);
  border: none; border-radius: 8px; cursor: pointer;
}
.tooltip-wipe {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  z-index: 9999;
  translate: -50% 8px;
  padding: 6px 12px; font-size: 12px; font-weight: 500;
  color: #fff; background: #0f172a; border-radius: 8px;
  box-shadow: 0 2px 6px rgba(15,23,42,.16);
  white-space: nowrap; pointer-events: none;
  overflow: hidden;
  clip-path: inset(0 0 100% 0);
  transition: clip-path .3s ease, translate .3s ease;
}
.tooltip-wipe-wrap:hover .tooltip-wipe {
  clip-path: inset(0 0 0 0); translate: -50% 0;
}
.tooltip-wipe::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: 0;
  width: 50%; translate: -250% 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
  transition: translate .5s ease;
}
.tooltip-wipe-wrap:hover .tooltip-wipe::before { translate: 250% 0; }
.tooltip-wipe::after {
  content: ""; position: absolute; left: 8px; right: 8px; bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
}
</style>`,
};