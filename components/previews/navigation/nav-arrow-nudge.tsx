import { navArrowNudge } from "@/data/navigation/nav-arrow-nudge";

export default function NavArrowNudge() {
  return (
    <>
      <style>{navArrowNudge.css}</style>
      <nav className="he-nav-arrow-nudge" aria-label="Example section">
        <ul className="nav11-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav11-link" href="https://example.com" aria-current="page">Overview<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav11-link" href="https://example.com">Guide<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav11-link" href="https://example.com">Details<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
        </ul>
      </nav>
    </>
  );
}
