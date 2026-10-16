import { inputTextareaMarginGuide } from "@/data/inputs/input-textarea-margin-guide";

export default function InputTextareaMarginGuide() {
  return (
    <>
      <style>{inputTextareaMarginGuide.css}</style>
      <div className="field he-input-textarea-margin-guide">
        <label className="inp26-label" htmlFor="input-textarea-margin-guide-inp26-input">Release notes</label>
        <div className="inp26-wrap">
          <i className="inp26-guide" aria-hidden="true"></i>
          <textarea className="inp26-control" id="input-textarea-margin-guide-inp26-input" rows={4} placeholder="What changed in this release?" aria-describedby="input-textarea-margin-guide-inp26-help"></textarea>
        </div>
        <p className="inp26-help" id="input-textarea-margin-guide-inp26-help">Markdown is supported; drag the corner to resize.</p>
      </div>
    </>
  );
}
