import { navIconCrossfade } from "@/data/navigation/nav-icon-crossfade";

export default function NavIconCrossfade() {
  return (
    <>
      <style>{navIconCrossfade.css}</style>
      <nav className="he-nav-icon-crossfade" aria-label="Example section">
        <ul className="nav14-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav14-link" href="https://example.com" aria-current="page"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav14-link" href="https://example.com"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav14-link" href="https://example.com"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Details</a></li>
        </ul>
      </nav>
    </>
  );
}
