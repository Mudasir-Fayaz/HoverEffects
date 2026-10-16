import { badgeCountCell } from "@/data/badges/badge-count-cell";

export default function BadgeCountCell() {
  return (
    <>
      <style>{badgeCountCell.css}</style>
      <span className="he-badge-count-cell">Tasks<i className="bdg21-div" aria-hidden="true"></i><span className="bdg21-cell"><i className="bdg21-tint" aria-hidden="true"></i><span className="bdg21-num">8</span></span></span>
    </>
  );
}
