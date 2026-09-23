import type { HoverEffect } from "../types";

export const cornerBloomButton: HoverEffect = {
  id: "btn-corner-bloom",
  title: "Corner Bloom",
  category: "buttons",
  description: "A radial color bloom expands from the center via clip-path on hover.",
  tags: ["bloom", "radial", "clip-path"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function CornerBloomButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-0 bg-indigo-600 -z-10 transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-corner-bloom">Bloom</button>

<style>
.btn-corner-bloom {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  z-index: 0;
}
.btn-corner-bloom::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #4f46e5;
  z-index: -1;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-corner-bloom:hover::before {
  clip-path: circle(100% at 50% 50%);
}
</style>`,
};
