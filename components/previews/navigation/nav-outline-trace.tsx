import { navOutlineTrace } from "@/data/navigation/nav-outline-trace";

export default function NavOutlineTrace() {
  return (
    <>
      <style>{navOutlineTrace.css}</style>
      <nav className="he-nav-outline-trace" aria-label="Example section">
        <ul className="nav08-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav08-link" href="https://example.com" aria-current="page">Overview<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav08-link" href="https://example.com">Guide<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav08-link" href="https://example.com">Details<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}
