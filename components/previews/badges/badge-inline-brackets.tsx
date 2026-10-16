import { badgeInlineBrackets } from "@/data/badges/badge-inline-brackets";

export default function BadgeInlineBrackets() {
  return (
    <>
      <style>{badgeInlineBrackets.css}</style>
      <span className="he-badge-inline-brackets"><i className="bdg31-b bdg31-l" aria-hidden="true"></i>Optional<i className="bdg31-b bdg31-r" aria-hidden="true"></i></span>
    </>
  );
}
