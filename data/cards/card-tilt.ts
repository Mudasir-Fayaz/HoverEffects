import type { HoverEffect } from "../types";

export const cardTilt: HoverEffect = {
  id: "card-tilt",
  title: "Subtle 3D Tilt",
  category: "cards",
  description: "Subtle 3D perspective tilt transformation on hover.",
  tags: ["tilt", "3D", "perspective"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function TiltCard() {
  return (
    <div className="p-6 bg-white rounded-2xl
      shadow-[0_1px_3px_rgba(0,0,0,.08)]
      transition-all duration-300
      [transform:perspective(800px)_rotateY(0)_rotateX(0)]
      hover:[transform:perspective(800px)_rotateY(-3deg)_rotateX(2deg)]
      hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]">
      <h3 className="font-semibold mb-2">Card Title</h3>
      <p className="text-slate-500 text-sm">
        This card tilts slightly on hover for a 3D feel.
      </p>
    </div>
  );
}`,
  html: `<div class="card-tilt">
  <h3>Card Title</h3>
  <p>This card tilts slightly on hover for a 3D feel.</p>
</div>

<style>
.card-tilt {
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);
  transition: all 0.3s ease;
  transform: perspective(800px) rotateY(0) rotateX(0);
}
.card-tilt:hover {
  transform: perspective(800px) rotateY(-3deg) rotateX(2deg);
  box-shadow: 0 12px 30px rgba(0,0,0,.12);
}
.card-tilt h3 { margin: 0 0 8px; font-weight: 600; }
.card-tilt p { margin: 0; color: #64748b; font-size: 14px; }
</style>`,
};
