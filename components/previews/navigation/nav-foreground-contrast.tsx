import { navForegroundContrast } from "@/data/navigation/nav-foreground-contrast";

export default function NavForegroundContrast() {
  return (
    <>
      <style>{navForegroundContrast.css}</style>
      <nav className="he-nav-foreground-contrast" aria-label="Example section">
        <ul className="nav25-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav25-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav25-link" href="https://example.com">Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav25-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}
