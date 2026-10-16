import { navIconStroke } from "@/data/navigation/nav-icon-stroke";

export default function NavIconStroke() {
  return (
    <>
      <style>{navIconStroke.css}</style>
      <nav className="he-nav-icon-stroke" aria-label="Example section">
        <ul className="nav13-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav13-link" href="https://example.com" aria-current="page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Details</a></li>
        </ul>
      </nav>
    </>
  );
}
