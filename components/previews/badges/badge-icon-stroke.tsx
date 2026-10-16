import { badgeIconStroke } from "@/data/badges/badge-icon-stroke";

export default function BadgeIconStroke() {
  return (
    <>
      <style>{badgeIconStroke.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-icon-stroke" href="https://example.com"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 2.5h4.6l2.4 2.4v8.6H4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" /><path d="M9 2.5v2.6h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" /><path className="bdg16-draw" d="m6.1 9.3 1.5 1.5 2.9-3.5" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified docs</a>
    </>
  );
}
