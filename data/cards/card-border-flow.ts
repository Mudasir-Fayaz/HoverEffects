import type { HoverEffect } from "../types";

export const cardBorderFlow: HoverEffect = {
  id: "card-border-animate",
  title: "Animated Border",
  category: "cards",
  description: "Gradient border rotates around the card on hover.",
  tags: ["border", "gradient", "animation"],
  animationType: "border",
  complexity: "medium",
  react: `export default function AnimatedBorderCard() {
  return (
    <div className="relative p-6 bg-white rounded-2xl
      border-2 border-transparent
      transition-all duration-300 group">
      <div className="absolute -inset-0.5 rounded-2xl
        bg-linear-to-r from-indigo-500 via-pink-500 to-indigo-500
        bg-size-[300%_300%] opacity-0
        group-hover:opacity-100
        group-hover:animate-[borderRotate_3s_linear_infinite]
        -z-10" />
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        The border gradient rotates on hover.
      </p>
    </div>
  );
}`,
  html: `<div class="card-border-animate">
  <h3>Card Title</h3>
  <p>The border gradient rotates on hover.</p>
</div>

<style>
.card-border-animate {
  position: relative;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
.card-border-animate::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: linear-gradient(45deg, #6366f1, #ec4899, #6366f1);
  background-size: 300% 300%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-border-animate:hover::before {
  opacity: 1;
  animation: borderRotate 3s linear infinite;
}
@keyframes borderRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.card-border-animate h3 { margin: 0 0 8px; font-weight: 600; }
.card-border-animate p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
