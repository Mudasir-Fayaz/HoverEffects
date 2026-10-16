import { navCentreUnderline } from "@/data/navigation/nav-centre-underline";

export default function NavCentreUnderline() {
  return (
    <>
      <style>{navCentreUnderline.css}</style>
      <nav className="he-nav-centre-underline" aria-label="Example section">
        <ul className="nav01-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav01-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav01-link" href="https://example.com">Guide<i className="nav01-u" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav01-link" href="https://example.com">Details<i className="nav01-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
