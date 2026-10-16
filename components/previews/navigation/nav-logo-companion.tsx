import { navLogoCompanion } from "@/data/navigation/nav-logo-companion";

export default function NavLogoCompanion() {
  return (
    <>
      <style>{navLogoCompanion.css}</style>
      <nav className="he-nav-logo-companion" aria-label="Partner">
        <ul className="nav27-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav27-link" href="https://example.com" aria-current="page"><span className="nav27-logo"><i className="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 12.5v-9l9 9v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span className="nav27-name">Northwind</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav27-link" href="https://example.com"><span className="nav27-logo"><i className="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.6" /><path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span><span className="nav27-name">Acme Cloud</span></a></li>
        </ul>
      </nav>
    </>
  );
}
