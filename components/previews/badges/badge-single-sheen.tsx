import { badgeSingleSheen } from "@/data/badges/badge-single-sheen";

export default function BadgeSingleSheen() {
  return (
    <>
      <style>{badgeSingleSheen.css}</style>
      <span className="he-badge-single-sheen"><i className="bdg12-sheen" aria-hidden="true"></i><span className="bdg12-label">New arrival</span></span>
    </>
  );
}
