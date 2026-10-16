import { navCornerFocus } from "@/data/navigation/nav-corner-focus";

export default function NavCornerFocus() {
  return (
    <>
      <style>{navCornerFocus.css}</style>
      <nav className="he-nav-corner-focus" aria-label="Example section">
        <ul className="nav09-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav09-link" href="https://example.com" aria-current="page">Overview<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav09-link" href="https://example.com">Guide<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav09-link" href="https://example.com">Details<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
