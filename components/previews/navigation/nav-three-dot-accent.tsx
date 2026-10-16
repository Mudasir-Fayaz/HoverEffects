import { navThreeDotAccent } from "@/data/navigation/nav-three-dot-accent";

export default function NavThreeDotAccent() {
  return (
    <>
      <style>{navThreeDotAccent.css}</style>
      <nav className="he-nav-three-dot-accent" aria-label="Example section">
        <ul className="nav26-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav26-link" href="https://example.com" aria-current="page"><span className="nav26-label">Overview</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav26-link" href="https://example.com"><span className="nav26-label">Guide</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav26-link" href="https://example.com"><span className="nav26-label">Details</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
        </ul>
      </nav>
    </>
  );
}
