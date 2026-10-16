import { badgeIconWell } from "@/data/badges/badge-icon-well";

export default function BadgeIconWell() {
  return (
    <>
      <style>{badgeIconWell.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-icon-well" href="https://example.com"><span className="bdg23-well"><i className="bdg23-disc" aria-hidden="true"></i><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3h8v10.5L8 11l-4 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg></span>Bookmarks</a>
    </>
  );
}
