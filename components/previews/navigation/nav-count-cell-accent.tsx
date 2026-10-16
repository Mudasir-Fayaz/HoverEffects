import { navCountCellAccent } from "@/data/navigation/nav-count-cell-accent";

export default function NavCountCellAccent() {
  return (
    <>
      <style>{navCountCellAccent.css}</style>
      <nav className="he-nav-count-cell-accent" aria-label="Example section">
        <ul className="nav18-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav18-link" href="https://example.com" aria-current="page">Inbox<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">12</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav18-link" href="https://example.com">Drafts<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">3</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav18-link" href="https://example.com">Archive<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">248</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}
