import { badgeTopRail } from "@/data/badges/badge-top-rail";

export default function BadgeTopRail() {
  return (
    <>
      <style>{badgeTopRail.css}</style>
      <span className="he-badge-top-rail"><i className="bdg05-rail" aria-hidden="true"></i>Category</span>
    </>
  );
}
