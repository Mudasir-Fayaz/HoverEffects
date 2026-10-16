import { badgeCornerBrackets } from "@/data/badges/badge-corner-brackets";

export default function BadgeCornerBrackets() {
  return (
    <>
      <style>{badgeCornerBrackets.css}</style>
      <span className="he-badge-corner-brackets"><i className="bdg03-tl" aria-hidden="true"></i><i className="bdg03-tr" aria-hidden="true"></i><i className="bdg03-bl" aria-hidden="true"></i><i className="bdg03-br" aria-hidden="true"></i>v2.4.0</span>
    </>
  );
}
