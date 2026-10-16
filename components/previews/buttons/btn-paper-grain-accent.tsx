import { btnPaperGrainAccent } from "@/data/buttons/btn-paper-grain-accent";

export default function BtnPaperGrainAccent() {
  return (
    <>
      <style>{btnPaperGrainAccent.css}</style>
      <button className="he-btn-paper-grain-accent" type="button">
        <span className="surface" aria-hidden="true">
          <span className="grain deco"></span>
        </span>
        <span className="label">Send invite</span>
      </button>
    </>
  );
}
