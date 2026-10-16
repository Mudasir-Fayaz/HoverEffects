import { navDropLine } from "@/data/navigation/nav-drop-line";

const items = ["Home", "Gallery", "Portfolio", "Clients", "Contact"];

export default function NavDropLine() {
  return (
    <>
      <style>{navDropLine.css}</style>
      <nav className="nav-drop-line" aria-label="Demo navigation">
        {items.map((label, index) => (
          <a key={label} href="https://example.com" aria-current={index === 0 ? "page" : undefined}>
            <span className="he-label">{label}</span>
            <span className="he-helper" aria-hidden="true">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
