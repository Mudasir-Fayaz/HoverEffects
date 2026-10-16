import { badgeDotPulseRing } from "@/data/badges/badge-dot-pulse-ring";

export default function BadgeDotPulse() {
  return (
    <>
      <style>{badgeDotPulseRing.css}</style>
      <span className="he-badge-dot-pulse-ring"><span className="bdg15-dot" aria-hidden="true"></span>Broadcasting</span>
    </>
  );
}
