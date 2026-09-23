import type { HoverEffect } from "../types";

export const letterSpacingButton: HoverEffect = {
  id: "btn-letter-spacing",
  title: "Letter Spacing",
  category: "buttons",
  description: "Letter spacing smoothly expands on hover for a subtle typographic effect.",
  tags: ["text", "spacing", "typography"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function LetterSpacingButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-slate-700 border-none cursor-pointer transition-[letter-spacing] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] tracking-normal hover:tracking-[0.15em]">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-letter-spacing">Hover Me</button>

<style>
.btn-letter-spacing {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #334155;
  border: none;
  cursor: pointer;
  transition: letter-spacing 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  letter-spacing: 0;
}
.btn-letter-spacing:hover {
  letter-spacing: 0.15em;
}
</style>`,
};
