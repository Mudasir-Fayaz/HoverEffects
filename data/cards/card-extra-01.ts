import type { HoverEffect } from "../types";

export const cardExtra01: HoverEffect = {
  id: "card-extra-01",
  title: "Extra 01",
  category: "cards",
  description: "Extra hover interaction variant 01 for cards.",
  tags: ["extra", "hover", "cards"],
  animationType: "transform",
  complexity: "simple",
  credit: {
    title: "HoverEffects",
    url: "https://hovereffects.in",
  },
  react: "export default function CardExtra01Preview() { return (<div className=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Cards Extra 01</div>); }",
  html: "<div class=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Cards Extra 01</div>",
};
