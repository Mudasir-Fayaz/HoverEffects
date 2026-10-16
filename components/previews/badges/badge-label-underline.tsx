import { badgeLabelUnderline } from "@/data/badges/badge-label-underline";

export default function BadgeLabelUnderline() {
  return (
    <>
      <style>{badgeLabelUnderline.css}</style>
      <span className="he-badge-label-underline">Editor’s pick<i className="bdg04-u" aria-hidden="true"></i></span>
    </>
  );
}
