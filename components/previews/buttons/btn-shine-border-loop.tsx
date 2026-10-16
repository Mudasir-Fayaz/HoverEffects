import { shineBorderLoopButton } from "@/data/buttons/shine-border-loop";

export default function BtnShineBorderLoop() {
  return (
    <>
      <style>{shineBorderLoopButton.css}</style>
      <button type="button" className="btn-shine-border-loop">
        <span className="he-label">Live demo</span>
      </button>
    </>
  );
}