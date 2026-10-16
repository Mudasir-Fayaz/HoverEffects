import { badgeSegmentHighlight } from "@/data/badges/badge-segment-highlight";

export default function BadgeSegmentHighlight() {
  return (
    <>
      <style>{badgeSegmentHighlight.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-segment-highlight" href="https://example.com"><span className="bdg28-cat">Plan</span><span className="bdg28-val"><i className="bdg28-hl" aria-hidden="true"></i><span className="bdg28-v">Team</span></span></a>
    </>
  );
}
