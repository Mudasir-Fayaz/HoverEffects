import type { HoverEffect } from "../types";

export const linkExtra01: HoverEffect = {
  id: "link-extra-01",
  title: "Extra 01",
  category: "links",
  description: "Extra hover interaction variant 01 for links.",
  tags: ["extra", "hover", "links"],
  animationType: "transform",
  complexity: "simple",
  credit: {
    title: "HoverEffects",
    url: "https://hovereffects.in",
  },
  react: "export default function LinkExtra01Preview() { return (<div className=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Links Extra 01</div>); }",
  html: "<div class=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Links Extra 01</div>",
};
