import type { HoverEffect } from "../types";

export const neonGlowEdgeButton: HoverEffect = {
  id: "btn-neon-glow-edge",
  title: "Neon Glow Edge",
  category: "buttons",
  description: "Button edge lights up with a subtle neon glow on hover.",
  tags: ["neon", "glow", "edge"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function NeonGlowEdgeButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer transition-[box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_15px_#a78bfa,0_0_30px_rgba(167,139,250,0.3)]">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-neon-glow-edge">Hover Me</button>

<style>
.btn-neon-glow-edge {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-neon-glow-edge:hover {
  box-shadow: 0 0 15px #a78bfa, 0 0 30px rgba(167, 139, 250, 0.3);
}
</style>`,
};
