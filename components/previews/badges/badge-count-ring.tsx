import { badgeCountRing } from "@/data/badges/badge-count-ring";

export default function BadgeCountRing() {
  return (
    <>
      <style>{badgeCountRing.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-count-ring" href="https://example.com">Inbox <span className="bdg20-count">12</span><svg className="bdg20-ring" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.7" fill="none" stroke="var(--line-strong)" strokeWidth="2" /><circle className="bdg20-arc" cx="8" cy="8" r="5.7" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100" transform="rotate(-90 8 8)" /></svg></a>
    </>
  );
}
