import type { HoverEffect } from "../types";

export const navExtra01: HoverEffect = {
  id: "nav-extra-01",
  title: "Extra 01",
  category: "navigation",
  description: "Extra hover interaction variant 01 for navigation.",
  tags: ["extra", "hover", "navigation"],
  animationType: "transform",
  complexity: "simple",
  credit: {
    title: "HoverEffects",
    url: "https://hovereffects.in",
  },
  react: "export default function NavExtra01Preview() { return (<div className=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Navigation Extra 01</div>); }",
  html: "<div class=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Navigation Extra 01</div>",
};
