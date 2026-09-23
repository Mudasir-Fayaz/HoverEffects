import type { HoverEffect } from "../types";

export const inputFloatingLabel: HoverEffect = {
  id: "input-floating-label",
  title: "Floating Label",
  category: "inputs",
  description: "Label floats above input field on focus.",
  tags: ["input", "label", "floating", "focus"],
  animationType: "translate",
  complexity: "medium",
  react: `export default function FloatingLabelInput() {
  return (
    <div className="relative">
      <input
        type="text"
        id="float-input"
        placeholder=" "
        className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-slate-200
          outline-none bg-white text-slate-700 text-sm
          transition-all duration-300
          focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.12)]"
      />
      <label
        htmlFor="float-input"
        className="absolute left-4 top-3.5 text-slate-400 text-sm
          transition-all duration-200
          peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-500
          peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-xs"
      >
        Email address
      </label>
    </div>
  );
}`,
  html: `<div class="float-label-wrap">
  <input type="text" id="float-input" placeholder=" " class="float-input" />
  <label for="float-input">Email address</label>
</div>

<style>
.float-label-wrap { position: relative; }
.float-input {
  width: 100%; padding: 20px 16px 8px;
  border-radius: 12px; border: 1px solid #e2e8f0;
  outline: none; background: #fff; color: #334155; font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.float-label-wrap label {
  position: absolute; left: 16px; top: 14px;
  color: #94a3b8; font-size: 14px;
  transition: all 0.2s ease; pointer-events: none;
}
.float-input:focus + label,
.float-input:not(:placeholder-shown) + label {
  top: 6px; font-size: 11px; color: #6366f1;
}
.float-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.12); }
</style>`,
};
