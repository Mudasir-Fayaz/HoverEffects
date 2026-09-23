import type { HoverEffect } from "../types";

export const inputHighlightFill: HoverEffect = {
  id: "input-highlight-fill",
  title: "Highlight Fill",
  category: "inputs",
  description: "Background fills with a soft tint on hover/focus.",
  tags: ["input", "highlight", "fill", "background"],
  animationType: "color",
  complexity: "simple",
  react: `export default function HighlightFillInput() {
  return (
    <input
      type="text"
      placeholder="Type something..."
      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none
        bg-white text-slate-700 placeholder:text-slate-400 text-sm
        transition-all duration-300
        hover:bg-indigo-50/40 hover:border-indigo-200
        focus:bg-indigo-50/60 focus:border-indigo-400"
    />
  );
}`,
  html: `<input type="text" placeholder="Type something..." class="input-highlight-fill" />

<style>
.input-highlight-fill {
  width: 100%; padding: 10px 16px;
  border-radius: 12px; border: 1px solid #e2e8f0;
  outline: none; background: #fff; color: #334155; font-size: 14px;
  transition: all 0.3s ease;
}
.input-highlight-fill:hover { background: rgba(238,242,255,.4); border-color: #c7d2fe; }
.input-highlight-fill:focus { background: rgba(238,242,255,.6); border-color: #818cf8; }
</style>`,
};
