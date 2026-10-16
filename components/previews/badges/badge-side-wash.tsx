import { badgeSideWash } from "@/data/badges/badge-side-wash";

export default function BadgeSideWash() {
  return (
    <>
      <style>{badgeSideWash.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-side-wash" href="https://example.com"><i className="bdg07-wash" aria-hidden="true"></i><span className="bdg07-inner"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> Releases</span></a>
    </>
  );
}
