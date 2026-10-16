import { navGradientTextAccent } from "@/data/navigation/nav-gradient-text-accent";

export default function NavGradientTextAccent() {
  return (
    <>
      <style>{navGradientTextAccent.css}</style>
      <nav className="he-nav-gradient-text-accent" aria-label="Example section">
        <ul className="nav24-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav24-link" href="https://example.com" aria-current="page"><span className="nav24-label"><span className="nav24-a">Live metrics</span><span className="nav24-b" aria-hidden="true">Live metrics</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav24-link" href="https://example.com"><span className="nav24-label"><span className="nav24-a">Event log</span><span className="nav24-b" aria-hidden="true">Event log</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav24-link" href="https://example.com"><span className="nav24-label"><span className="nav24-a">Saved views</span><span className="nav24-b" aria-hidden="true">Saved views</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}
