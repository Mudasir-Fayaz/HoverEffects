import type { HoverEffect } from "../types";

export const badgeGlow: HoverEffect = {
  id: "badge-glow",
  title: "Glow Badge",
  category: "badges",
  description: "Badge radiates a colored glow on hover.",
  tags: ["badge", "glow", "shadow"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function GlowBadge() {
  return (
    <span className="inline-flex items-center px-3 py-1
      text-xs font-semibold rounded-full
      bg-violet-500 text-white cursor-default
      transition-all duration-300
      hover:shadow-[0_0_16px_rgba(139,92,246,.6)]
      hover:scale-[1.04]">
      Premium
    </span>
  );
}`,
  html: `<span class="badge-glow">Premium</span>

<style>
.badge-glow {
  display: inline-flex; align-items: center;
  padding: 4px 12px; font-size: 12px; font-weight: 600;
  border-radius: 999px; background: #8b5cf6; color: #fff;
  cursor: default; transition: all 0.3s ease;
}
.badge-glow:hover {
  box-shadow: 0 0 16px rgba(139,92,246,.6);
  transform: scale(1.04);
}
</style>`,
};
