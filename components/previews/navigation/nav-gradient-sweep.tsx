import { navGradientSweep } from "@/data/navigation/nav-gradient-sweep";

export default function NavGradientSweep() {
  return (
    <>
      <style>{navGradientSweep.css}</style>
      <nav className="he-nav-gradient-sweep" aria-label="Example section">
        <ul className="nav23-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav23-link" href="https://example.com" aria-current="page"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Overview</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav23-link" href="https://example.com"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Guide</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav23-link" href="https://example.com"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}
