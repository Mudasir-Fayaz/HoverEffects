import { navGroupSeparatorAccent } from "@/data/navigation/nav-group-separator-accent";

export default function NavGroupSeparatorAccent() {
  return (
    <>
      <style>{navGroupSeparatorAccent.css}</style>
      <nav className="he-nav-group-separator-accent" aria-label="Grouped example">
        <div className="nav28-group">
          <p className="nav28-head" id="nav-group-separator-accent-nav28-h1">Workspace</p>
          <i className="nav28-sep" aria-hidden="true"></i>
          <ul className="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h1">
            <li><a onClick={(event) => event.preventDefault()} className="nav28-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a onClick={(event) => event.preventDefault()} className="nav28-link" href="https://example.com">Activity</a></li>
          </ul>
        </div>
        <div className="nav28-group">
          <p className="nav28-head" id="nav-group-separator-accent-nav28-h2">Account</p>
          <i className="nav28-sep" aria-hidden="true"></i>
          <ul className="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h2">
            <li><a onClick={(event) => event.preventDefault()} className="nav28-link" href="https://example.com">Billing</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
