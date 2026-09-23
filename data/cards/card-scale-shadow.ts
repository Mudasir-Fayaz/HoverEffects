import type { HoverEffect } from "../types";

export const cardScaleShadow: HoverEffect = {
  id: "card-scale-shadow",
  title: "Scale & Shadow",
  category: "cards",
  description: "Gentle scale-up paired with deeper shadow on hover.",
  tags: ["scale", "shadow"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function ScaleShadowCard() {
  return (
    <div className="p-6 bg-white rounded-2xl
      shadow-[0_1px_3px_rgba(0,0,0,.08)]
      transition-all duration-300
      hover:scale-[1.03]
      hover:shadow-[0_16px_40px_rgba(0,0,0,.1)]">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        A gentle scale up paired with deeper shadow.
      </p>
    </div>
  );
}`,
  html: `<div class="card-scale-shadow">
  <h3>Card Title</h3>
  <p>A gentle scale up paired with deeper shadow.</p>
</div>

<style>
.card-scale-shadow {
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
  transition: all 0.3s ease;
}
.card-scale-shadow:hover {
  transform: scale(1.03);
  box-shadow: 0 16px 40px rgba(0,0,0,.1);
}
.card-scale-shadow h3 { margin: 0 0 8px; font-weight: 600; }
.card-scale-shadow p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
