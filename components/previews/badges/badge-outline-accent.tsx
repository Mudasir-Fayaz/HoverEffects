import { badgeOutlineAccent } from "@/data/badges/badge-outline-accent";

export default function BadgeOutlineAccent() {
  return (
    <>
      <style>{badgeOutlineAccent.css}</style>
      <span className="he-badge-outline-accent"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> Active</span>
    </>
  );
}
