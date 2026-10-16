import { navBackgroundWash } from "@/data/navigation/nav-background-wash";

export default function NavBackgroundWash() {
  return (
    <>
      <style>{navBackgroundWash.css}</style>
      <nav className="he-nav-background-wash" aria-label="Example section">
        <ul className="nav05-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav05-link" href="https://example.com" aria-current="page"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Overview</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav05-link" href="https://example.com"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Guide</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav05-link" href="https://example.com"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}
