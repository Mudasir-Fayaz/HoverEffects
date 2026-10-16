import { navShortcutAccent } from "@/data/navigation/nav-shortcut-accent";

export default function NavShortcutAccent() {
  return (
    <>
      <style>{navShortcutAccent.css}</style>
      <nav className="he-nav-shortcut-accent" aria-label="Example section">
        <ul className="nav17-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav17-link" href="https://example.com" aria-current="page">Command menu<kbd className="nav17-key">⌘K</kbd></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav17-link" href="https://example.com">Search<kbd className="nav17-key">/</kbd></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav17-link" href="https://example.com">New note<kbd className="nav17-key">N</kbd></a></li>
        </ul>
      </nav>
    </>
  );
}
