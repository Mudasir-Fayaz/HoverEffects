import { badgeRibbonTab } from "@/data/badges/badge-ribbon-tab";

export default function BadgeRibbonTab() {
  return (
    <>
      <style>{badgeRibbonTab.css}</style>
      <span className="he-badge-ribbon-tab"><i className="bdg27-ribbon" aria-hidden="true"></i>Changelog</span>
    </>
  );
}
