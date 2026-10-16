import { badgeLayeredPlate } from "@/data/badges/badge-layered-plate";

export default function BadgeLayeredPlate() {
  return (
    <>
      <style>{badgeLayeredPlate.css}</style>
      <span className="he-badge-layered-plate"><i className="bdg29-plate" aria-hidden="true"></i><span className="bdg29-label">Pinned</span></span>
    </>
  );
}
