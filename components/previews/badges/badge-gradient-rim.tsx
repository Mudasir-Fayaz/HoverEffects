import { badgeGradientRim } from "@/data/badges/badge-gradient-rim";

export default function BadgeGradientRim() {
  return (
    <>
      <style>{badgeGradientRim.css}</style>
      <span className="he-badge-gradient-rim"><i className="bdg11-rim" aria-hidden="true"></i><span className="bdg11-inner">Beta program</span></span>
    </>
  );
}
