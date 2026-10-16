import { navInsetFrame } from "@/data/navigation/nav-inset-frame";

export default function NavInsetFrame() {
  return (
    <>
      <style>{navInsetFrame.css}</style>
      <nav className="he-nav-inset-frame" aria-label="Example section">
        <ul className="nav07-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav07-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav07-link" href="https://example.com">Guide</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav07-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}
