import { navSplitLabelAccent } from "@/data/navigation/nav-split-label-accent";

export default function NavSplitLabelAccent() {
  return (
    <>
      <style>{navSplitLabelAccent.css}</style>
      <nav className="he-nav-split-label-accent" aria-label="Example section">
        <ul className="nav15-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav15-link" href="https://example.com" aria-current="page"><span className="nav15-w1">Case</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">studies</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav15-link" href="https://example.com"><span className="nav15-w1">Field</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">notes</span></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav15-link" href="https://example.com"><span className="nav15-w1">Release</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">archive</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}
