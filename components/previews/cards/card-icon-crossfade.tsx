import { cardIconCrossfade } from "@/data/cards/card-icon-crossfade";

export default function IconCrossfadeCard() {
  return (
    <>
      <style>{cardIconCrossfade.css}</style>
      <article className="he-card-icon-crossfade" aria-labelledby="card-icon-crossfade-title">
      <span className="card-icon" aria-hidden="true">
        <svg className="icon icon-a" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2.5" /><path d="M4 10h16M10 4v16" />
        </svg>
        <svg className="icon icon-b" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 3 10.5 13.5" /><path d="M21 3 14 21l-3.5-7.5L3 10z" />
        </svg>
      </span>
      <h2 id="card-icon-crossfade-title">From wireframe to launch</h2>
      <p className="body-copy">One continuous track from first sketch to production release, with review gates you control.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See the delivery track
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
