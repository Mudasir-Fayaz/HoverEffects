import { btnDuplexLabel } from "@/data/buttons/btn-duplex-label";

export default function BtnDuplexLabel() {
  return (
    <>
      <style>{btnDuplexLabel.css}</style>
      <button className="he-btn-duplex-label" type="button">
        <span className="label-stack">
          <span className="label">Print invoice</span>
          <span className="duplex deco" aria-hidden="true">Print invoice</span>
        </span>
      </button>
    </>
  );
}
