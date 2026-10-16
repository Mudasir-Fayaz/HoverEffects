import { navDotIndicator } from "@/data/navigation/nav-dot-indicator";

export default function NavDotIndicator() {
  return (
    <>
      <style>{navDotIndicator.css}</style>
      <nav className="he-nav-dot-indicator" aria-label="Example section">
        <ul className="nav10-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav10-link" href="https://example.com" aria-current="page"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav10-link" href="https://example.com"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav10-link" href="https://example.com"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Details</a></li>
        </ul>
      </nav>
    </>
  );
}
