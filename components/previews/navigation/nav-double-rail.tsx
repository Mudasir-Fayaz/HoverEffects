import { navDoubleRail } from "@/data/navigation/nav-double-rail";

export default function NavDoubleRail() {
  return (
    <>
      <style>{navDoubleRail.css}</style>
      <nav className="he-nav-double-rail" aria-label="Example section">
        <ul className="nav04-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav04-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav04-link" href="https://example.com">Guide<i className="nav04-rail nav04-top" aria-hidden="true"></i><i className="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav04-link" href="https://example.com">Details<i className="nav04-rail nav04-top" aria-hidden="true"></i><i className="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
