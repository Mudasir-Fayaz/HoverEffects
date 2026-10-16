import { badgeDiagonalSweep } from "@/data/badges/badge-diagonal-sweep";

export default function BadgeDiagonalSweep() {
  return (
    <>
      <style>{badgeDiagonalSweep.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-diagonal-sweep" href="https://example.com"><i className="bdg09-sweep" aria-hidden="true"></i><span className="bdg09-label">Stable release</span></a>
    </>
  );
}
