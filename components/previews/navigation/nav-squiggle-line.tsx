import { navSquiggleLine } from "@/data/navigation/nav-squiggle-line";

const items = ["Home", "Gallery", "Portfolio", "Clients", "Contact"];

export default function NavSquiggleLine() {
  return (
    <>
      <style>{navSquiggleLine.css}</style>
      <nav className="nav-squiggle-line" aria-label="Demo navigation">
        {items.map((label, index) => (
          <a key={label} href="https://example.com" aria-current={index === 0 ? "page" : undefined}>
            {label}
            <svg
              className="he-squiggle"
              viewBox="0 0 90 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 5 C 14 1.5, 26 8, 40 4.5 C 52 1.5, 62 7.5, 76 4 C 82 2.6, 86 3.4, 88 4.8"
                pathLength="100"
              />
            </svg>
          </a>
        ))}
      </nav>
    </>
  );
}
