import { badgeStarTurn } from "@/data/badges/badge-star-turn";

export default function BadgeStarTurn() {
  return (
    <>
      <style>{badgeStarTurn.css}</style>
      <span className="he-badge-star-turn"><svg className="bdg18-star" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.9l1.9 3.8 4.2.6-3 3 .7 4.2L8 11.5l-3.8 2 .7-4.2-3-3 4.2-.6z" fill="currentColor" /></svg>Featured</span>
    </>
  );
}
