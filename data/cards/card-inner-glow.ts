import type { HoverEffect } from "../types";

export const cardInnerGlow: HoverEffect = {
  id: "card-inner-glow",
  title: "Inner Glow",
  category: "cards",
  description: "Soft inner gradient glow activates on hover.",
  tags: ["glow", "gradient", "inner"],
  animationType: "color",
  complexity: "simple",
  react: `export default function InnerGlowCard() {
  return (
    <div className="p-6 bg-white rounded-2xl
      border border-slate-200
      transition-all duration-300
      hover:bg-linear-to-br
      hover:from-indigo-500/4 hover:to-violet-500/6
      hover:border-indigo-500/20">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        A glowing background appears inside on hover.
      </p>
    </div>
  );
}`,
  html: `<div class="card-inner-glow">
  <h3>Card Title</h3>
  <p>A glowing background appears inside on hover.</p>
</div>

<style>
.card-inner-glow {
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.card-inner-glow:hover {
  background: linear-gradient(135deg, rgba(99,102,241,.04), rgba(139,92,246,.06));
  border-color: rgba(99,102,241,.2);
}
.card-inner-glow h3 { margin: 0 0 8px; font-weight: 600; }
.card-inner-glow p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
