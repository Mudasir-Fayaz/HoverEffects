import { badgeGradientCrossfade } from "@/data/badges/badge-gradient-crossfade";

export default function BadgeGradientCrossfade() {
  return (
    <>
      <style>{badgeGradientCrossfade.css}</style>
      <span className="he-badge-gradient-crossfade"><i className="bdg10-alt" aria-hidden="true"></i><span className="bdg10-label">Pro plan</span></span>
    </>
  );
}
