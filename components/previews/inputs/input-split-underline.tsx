import { inputSplitUnderline } from "@/data/inputs/input-split-underline";

export default function InputSplitUnderline() {
  return (
    <>
      <style>{inputSplitUnderline.css}</style>
      <div className="field he-input-split-underline">
        <label className="inp06-label" htmlFor="input-split-underline-inp06-input">Invite code</label>
        <div className="inp06-wrap">
          <input className="inp06-control" id="input-split-underline-inp06-input" type="text" placeholder="TEAM-2026" aria-describedby="input-split-underline-inp06-help" />
          <i className="inp06-u inp06-l" aria-hidden="true"></i>
          <i className="inp06-u inp06-r" aria-hidden="true"></i>
        </div>
        <p className="inp06-help" id="input-split-underline-inp06-help">Ask your admin if the code has expired.</p>
      </div>
    </>
  );
}
