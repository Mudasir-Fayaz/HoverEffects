import { badgePerimeterBeam } from "@/data/badges/badge-perimeter-beam";

export default function BadgePerimeterBeam() {
  return (
    <>
      <style>{badgePerimeterBeam.css}</style>
      <a onClick={(event) => event.preventDefault()} className="he-badge-perimeter-beam" href="https://example.com"><svg className="bdg13-beam" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true"><rect x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" /><rect className="bdg13-run" x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength="100" strokeDasharray="14 86" /></svg>Badge spec</a>
    </>
  );
}
