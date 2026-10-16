import { splitRevealButton } from "@/data/buttons/split-reveal";

export default function BtnSplitReveal() {
  return (
    <>
      <style>{splitRevealButton.css}</style>
      <button type="button" className="btn-split-reveal">
        <span className="he-split-seam" aria-hidden="true" />
        <span className="he-split-panel he-split-panel-a" aria-hidden="true" />
        <span className="he-split-panel he-split-panel-b" aria-hidden="true" />
        <span className="he-split-word he-split-word-a">Split</span>
        <span className="he-split-word he-split-word-b">Now</span>
      </button>
    </>
  );
}