import { badgeCentreBloom } from "@/data/badges/badge-centre-bloom";

export default function BadgeCentreBloom() {
  return (
    <>
      <style>{badgeCentreBloom.css}</style>
      <span className="he-badge-centre-bloom"><i className="bdg08-bloom" aria-hidden="true"></i><span className="bdg08-label"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>Live</span></span>
    </>
  );
}
