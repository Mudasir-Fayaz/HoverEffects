import { btnEngravedLabel } from "@/data/buttons/btn-engraved-label";

export default function BtnEngravedLabel() {
  return (
    <>
      <style>{btnEngravedLabel.css}</style>
      <button className="he-btn-engraved-label" type="button">
        <span className="label-stack">
          <span className="label">Sign agreement</span>
          <span className="engrave deco" aria-hidden="true">Sign agreement</span>
        </span>
      </button>
    </>
  );
}
