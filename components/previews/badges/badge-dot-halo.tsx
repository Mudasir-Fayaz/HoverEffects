import { badgeDotHalo } from "@/data/badges/badge-dot-halo";

export default function BadgeDotHalo() {
  return (
    <>
      <style>{badgeDotHalo.css}</style>
      <span className="he-badge-dot-halo"><span className="bdg14-dot"><i className="bdg14-halo" aria-hidden="true"></i></span>Operational</span>
    </>
  );
}
