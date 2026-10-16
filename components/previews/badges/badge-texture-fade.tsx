import { badgeTextureFade } from "@/data/badges/badge-texture-fade";

export default function BadgeTextureFade() {
  return (
    <>
      <style>{badgeTextureFade.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-texture-fade" href="https://example.com"><i className="bdg30-texture" aria-hidden="true"></i><span className="bdg30-label">Resources</span></a>
    </>
  );
}
