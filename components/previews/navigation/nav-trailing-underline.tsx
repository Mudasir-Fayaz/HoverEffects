import { navTrailingUnderline } from "@/data/navigation/nav-trailing-underline";

export default function NavTrailingUnderline() {
  return (
    <>
      <style>{navTrailingUnderline.css}</style>
      <nav className="he-nav-trailing-underline" aria-label="Example section">
        <ul className="nav03-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav03-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav03-link" href="https://example.com">Guide<i className="nav03-u" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav03-link" href="https://example.com">Details<i className="nav03-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
