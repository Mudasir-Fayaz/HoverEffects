import type { HoverEffect } from "../types";

export const shineBorderLoopButton: HoverEffect = {
  id: "btn-shine-border-loop",
  title: "Shine Border Loop",
  category: "buttons",
  description: "A shimmering gradient light continuously loops around the border on hover.",
  tags: ["shine", "border", "gradient", "loop"],
  animationType: "transform",
  complexity: "complex",
  react: `export default function ShineBorderLoopButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer z-0">
      <span className="absolute -inset-[2px] rounded-[14px] bg-gradient-to-r from-indigo-400 via-amber-400 to-emerald-400 bg-[length:300%_100%] -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_2s_linear_infinite]" />
      <span className="absolute inset-0 bg-indigo-500 -z-10" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-shine-border-loop">Shine</button>

<style>
@keyframes shine {
  0% { background-position: 0 0; }
  100% { background-position: 300% 0; }
}
.btn-shine-border-loop {
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
.btn-shine-border-loop::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: linear-gradient(90deg, #a78bfa, #f59e0b, #34d399, #a78bfa);
  background-size: 300% 100%;
  z-index: -1;
  animation: shine 2s linear infinite;
  animation-play-state: paused;
}
.btn-shine-border-loop::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #6366f1;
  z-index: -1;
}
.btn-shine-border-loop:hover::before {
  animation-play-state: running;
}
</style>`,
};
