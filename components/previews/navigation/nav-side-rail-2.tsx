import { navSideRail2 } from "@/data/navigation/nav-side-rail-2";

export default function NavSideRail() {
  return (
    <>
      <style>{navSideRail2.css}</style>
      <nav className="he-nav-side-rail-2" aria-label="Example section">
        <ul className="nav06-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav06-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav06-link" href="https://example.com"><i className="nav06-rail" aria-hidden="true"></i>Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav06-link" href="https://example.com"><i className="nav06-rail" aria-hidden="true"></i>Details</a></li>
        </ul>
      </nav>
    </>
  );
}
