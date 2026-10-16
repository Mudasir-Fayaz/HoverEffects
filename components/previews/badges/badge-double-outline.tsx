import { badgeDoubleOutline } from "@/data/badges/badge-double-outline";

export default function BadgeDoubleOutline() {
  return (
    <>
      <style>{badgeDoubleOutline.css}</style>
      <span className="he-badge-double-outline"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="2.4" fill="currentColor" /><path d="M2.5 8a5.5 5.5 0 0 1 11 0 5.5 5.5 0 0 1-11 0z" stroke="currentColor" strokeWidth="1.3" /></svg> Synced</span>
    </>
  );
}
