import { navTextureHighlight } from "@/data/navigation/nav-texture-highlight";

export default function NavTextureHighlight() {
  return (
    <>
      <style>{navTextureHighlight.css}</style>
      <nav className="he-nav-texture-highlight" aria-label="Example section">
        <ul className="nav22-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav22-link" href="https://example.com" aria-current="page"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Overview</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav22-link" href="https://example.com"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Guide</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav22-link" href="https://example.com"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}
