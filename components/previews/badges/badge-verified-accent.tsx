import { badgeVerifiedAccent } from "@/data/badges/badge-verified-accent";

export default function BadgeVerifiedAccent() {
  return (
    <>
      <style>{badgeVerifiedAccent.css}</style>
      <span className="he-badge-verified-accent"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" opacity=".5" /><path d="m5.4 8.3 1.8 1.8 3.4-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".5" /><path className="bdg19-draw" d="m5.4 8.3 1.8 1.8 3.4-4.2" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified</span>
    </>
  );
}
