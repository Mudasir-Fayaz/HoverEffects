import { badgeContrastShift } from "@/data/badges/badge-contrast-shift";

export default function BadgeContrastShift() {
  return (
    <>
      <style>{badgeContrastShift.css}</style>
      <span className="he-badge-contrast-shift">Priority</span>
    </>
  );
}
