import type { HoverEffect } from "../types";

export const cardGlowBorder: HoverEffect = {
  id: "card-glow-border",
  title: "Glow Border",
  category: "cards",
  description: "Glowing indigo border appears on hover.",
  tags: ["border", "glow", "shadow"],
  animationType: "border",
  complexity: "simple",
  react: `export default function GlowBorderCard() {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200
      transition-all duration-300
      hover:border-indigo-500
      hover:shadow-[0_0_20px_rgba(99,102,241,.15)]">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        A subtle glowing border appears on hover.
      </p>
    </div>
  );
}`,
  html: `<div class="card-glow-border">
  <h3>Card Title</h3>
  <p>A subtle glowing border appears on hover.</p>
</div>

<style>
.card-glow-border {
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.card-glow-border:hover {
  border-color: #6366f1;
  box-shadow: 0 0 20px rgba(99,102,241,.15);
}
.card-glow-border h3 { margin: 0 0 8px; font-weight: 600; }
.card-glow-border p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
