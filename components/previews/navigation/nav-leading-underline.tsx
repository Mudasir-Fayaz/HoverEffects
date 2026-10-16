import { navLeadingUnderline } from "@/data/navigation/nav-leading-underline";

export default function NavLeadingUnderline() {
  return (
    <>
      <style>{navLeadingUnderline.css}</style>
      <nav className="he-nav-leading-underline" aria-label="Example section">
        <ul className="nav02-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav02-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav02-link" href="https://example.com">Guide<i className="nav02-u" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav02-link" href="https://example.com">Details<i className="nav02-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
