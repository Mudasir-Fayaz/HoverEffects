import { navBranchConnector } from "@/data/navigation/nav-branch-connector";

export default function NavBranchConnector() {
  return (
    <>
      <style>{navBranchConnector.css}</style>
      <nav className="he-nav-branch-connector" aria-label="Tree example">
        <ul className="nav29-list">
          <li className="nav29-item"><a onClick={(event) => event.preventDefault()} className="nav29-link" href="https://example.com" aria-current="page">Components</a>
            <ul className="nav29-sub">
              <li className="nav29-item"><a onClick={(event) => event.preventDefault()} className="nav29-link" href="https://example.com">Buttons</a></li>
              <li className="nav29-item"><a onClick={(event) => event.preventDefault()} className="nav29-link" href="https://example.com">Dialogs</a></li>
              <li className="nav29-item"><a onClick={(event) => event.preventDefault()} className="nav29-link" href="https://example.com">Tokens</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
