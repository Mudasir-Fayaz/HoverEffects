import { navMetadataEmphasis } from "@/data/navigation/nav-metadata-emphasis";

export default function NavMetadataEmphasis() {
  return (
    <>
      <style>{navMetadataEmphasis.css}</style>
      <nav className="he-nav-metadata-emphasis" aria-label="Example section">
        <ul className="nav16-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav16-link" href="https://example.com" aria-current="page">Overview<span className="nav16-meta">3 min</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav16-link" href="https://example.com">Guide<span className="nav16-meta">8 min</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav16-link" href="https://example.com">Details<span className="nav16-meta">5 min</span></a></li>
        </ul>
      </nav>
    </>
  );
}
