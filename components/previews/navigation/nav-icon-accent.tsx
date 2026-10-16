import { navIconAccent } from "@/data/navigation/nav-icon-accent";

export default function NavIconAccent() {
  return (
    <>
      <style>{navIconAccent.css}</style>
      <nav className="he-nav-icon-accent" aria-label="Example section">
        <ul className="nav12-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav12-link" href="https://example.com" aria-current="page"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 6.4h11" stroke="currentColor" strokeWidth="1.4" /></svg>Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav12-link" href="https://example.com"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3h7l3 3v7H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M10 3v3h3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav12-link" href="https://example.com"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="1.4" /><path d="M8 5.4v3.2M8 10.8h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>Details</a></li>
        </ul>
      </nav>
    </>
  );
}
