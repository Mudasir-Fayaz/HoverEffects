import { badgeCornerFold } from "@/data/badges/badge-corner-fold";

export default function BadgeCornerFold() {
  return (
    <>
      <style>{badgeCornerFold.css}</style>
      <span className="he-badge-corner-fold">Draft<i className="bdg25-fold" aria-hidden="true"></i></span>
    </>
  );
}
