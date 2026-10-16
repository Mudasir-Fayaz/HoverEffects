import { navDividerSweep } from "@/data/navigation/nav-divider-sweep";

export default function NavDividerSweep() {
  return (
    <>
      <style>{navDividerSweep.css}</style>
      <nav className="he-nav-divider-sweep" aria-label="Example section">
        <ul className="nav19-list">
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a onClick={(event) => event.preventDefault()} className="nav19-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a onClick={(event) => event.preventDefault()} className="nav19-link" href="https://example.com">Guide</a></li>
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a onClick={(event) => event.preventDefault()} className="nav19-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}
