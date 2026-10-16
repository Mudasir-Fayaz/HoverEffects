import { badgeAvatarHalo } from "@/data/badges/badge-avatar-halo";

export default function BadgeAvatarHalo() {
  return (
    <>
      <style>{badgeAvatarHalo.css}</style>
      <span className="he-badge-avatar-halo"><span className="bdg33-avatar"><span className="bdg33-initials" aria-hidden="true">MT</span><i className="bdg33-halo" aria-hidden="true"></i></span>Mira Tan</span>
    </>
  );
}
