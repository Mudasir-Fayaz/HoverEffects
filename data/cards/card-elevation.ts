import type { HoverEffect } from "../types";

export const cardElevation: HoverEffect = {
  id: "card-elevation",
  title: "Elevation Lift",
  category: "cards",
  description: "Card lifts with a soft deep shadow on hover.",
  tags: ["elevation", "shadow", "lift"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function ElevationCard() {
  return (
    <div className="p-6 bg-white rounded-2xl
      shadow-[0_1px_3px_rgba(0,0,0,.08)]
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_12px_40px_rgba(0,0,0,.12)]">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        Hover to see the elevation effect.
      </p>
    </div>
  );
}`,
  html: `<div class="card-elevation">
  <h3>Card Title</h3>
  <p>Hover to see the elevation effect.</p>
</div>

<style>
.card-elevation {
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
  transition: all 0.3s ease;
}
.card-elevation:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,.12);
}
.card-elevation h3 { margin: 0 0 8px; font-weight: 600; }
.card-elevation p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
