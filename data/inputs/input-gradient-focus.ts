import type { HoverEffect } from "../types";

export const inputGradientFocus: HoverEffect = {
  id: "input-gradient-focus",
  title: "Gradient Focus",
  category: "inputs",
  description: "Gradient border flows around input on focus.",
  tags: ["input", "gradient", "focus", "border"],
  animationType: "border",
  complexity: "medium",
  react: `export default function GradientFocusInput() {
  return (
    <div className="relative rounded-xl p-px bg-slate-200
      focus-within:bg-linear-to-r focus-within:from-indigo-500 focus-within:to-violet-500
      transition-all duration-300">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full px-4 py-2.5 rounded-[11px] outline-none bg-white
          text-slate-700 placeholder:text-slate-400 text-sm"
      />
    </div>
  );
}`,
  html: `<div class="gradient-input-wrap">
  <input type="text" placeholder="Type something..." />
</div>

<style>
.gradient-input-wrap {
  display: inline-block;
  border-radius: 12px;
  padding: 1px;
  background: #e2e8f0;
  transition: background 0.3s ease;
}
.gradient-input-wrap:focus-within {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}
.gradient-input-wrap input {
  display: block; width: 100%;
  padding: 10px 16px;
  border-radius: 11px;
  border: none; outline: none;
  background: #fff; color: #334155; font-size: 14px;
}
</style>`,
};
