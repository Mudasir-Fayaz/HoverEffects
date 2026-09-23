import type { HoverEffect } from "../types";

export const inputBorderGlow: HoverEffect = {
  id: "input-border-glow",
  title: "Border Glow",
  category: "inputs",
  description: "Input border glows with indigo on focus.",
  tags: ["input", "border", "glow", "focus"],
  animationType: "border",
  complexity: "simple",
  react: `export default function BorderGlowInput() {
  return (
    <input
      type="text"
      placeholder="Type something..."
      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none
        bg-white text-slate-700 placeholder:text-slate-400
        transition-all duration-300
        hover:border-indigo-300
        focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.15)]"
    />
  );
}`,
  html: `<input type="text" placeholder="Type something..." class="input-border-glow" />

<style>
.input-border-glow {
  width: 100%;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  outline: none;
  background: #fff;
  color: #334155;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.input-border-glow:hover { border-color: #a5b4fc; }
.input-border-glow:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,.15);
}
</style>`,
};
