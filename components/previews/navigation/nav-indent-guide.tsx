import { navIndentGuide } from "@/data/navigation/nav-indent-guide";

export default function NavIndentGuide() {
  return (
    <>
      <style>{navIndentGuide.css}</style>
      <nav className="he-nav-indent-guide" aria-label="Nested example">
        <ul className="nav20-list">
          <li className="nav20-item">
            <a onClick={(event) => event.preventDefault()} className="nav20-link" href="https://example.com" aria-current="page">Projects</a>
            <ul className="nav20-sub">
              <li className="nav20-item"><a onClick={(event) => event.preventDefault()} className="nav20-link" href="https://example.com">Alpha release</a></li>
              <li className="nav20-item"><a onClick={(event) => event.preventDefault()} className="nav20-link" href="https://example.com">Beta feedback</a></li>
            </ul>
          </li>
          <li className="nav20-item"><a onClick={(event) => event.preventDefault()} className="nav20-link" href="https://example.com">Archive</a></li>
        </ul>
      </nav>
    </>
  );
}
