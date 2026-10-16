import { badgeIconCrossfade } from "@/data/badges/badge-icon-crossfade";

export default function BadgeIconCrossfade() {
  return (
    <>
      <style>{badgeIconCrossfade.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-icon-crossfade" href="https://example.com"><span className="bdg17-box" aria-hidden="true"><svg className="bdg17-a" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3.5h4v9H3zM9 3.5h4v9H9z" /></svg><svg className="bdg17-b" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 5 3 3-3 3" /><path d="M11.5 5v6" /></svg></span>API reference</a>
    </>
  );
}
