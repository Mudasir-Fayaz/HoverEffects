import { badgeSecondaryLabelSwap } from "@/data/badges/badge-secondary-label-swap";

export default function BadgeSecondaryLabelSwap() {
  return (
    <>
      <style>{badgeSecondaryLabelSwap.css}</style>
      <span className="he-badge-secondary-label-swap"><span className="bdg24-primary">Delivery</span><span className="bdg24-viewport" aria-hidden="true"><span className="bdg24-cap bdg24-a">2–3 days</span><span className="bdg24-cap bdg24-b">Tracked</span></span></span>
    </>
  );
}
