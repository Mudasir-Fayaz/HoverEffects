import type { HoverEffect } from "../types";

export const badgeExtra01: HoverEffect = {
  id: "badge-extra-01",
  title: "Extra 01",
  category: "badges",
  description: "Extra hover interaction variant 01 for badges.",
  tags: ["extra", "hover", "badges"],
  animationType: "transform",
  complexity: "simple",
  credit: {
    title: "HoverEffects",
    url: "https://hovereffects.in",
  },
  react: "export default function BadgeExtra01Preview() { return (<div className=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Badges Extra 01</div>); }",
  html: "<div class=\"inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600\">Badges Extra 01</div>",
};
