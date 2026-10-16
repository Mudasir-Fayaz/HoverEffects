import { inputHelperEmphasis } from "@/data/inputs/input-helper-emphasis";

export default function InputHelperEmphasis() {
  return (
    <>
      <style>{inputHelperEmphasis.css}</style>
      <div className="field he-input-helper-emphasis">
        <label className="inp20-label" htmlFor="input-helper-emphasis-inp20-input">Callback URL</label>
        <div className="inp20-wrap">
          <input className="inp20-control" id="input-helper-emphasis-inp20-input" type="url" placeholder="your-app.example/hooks" aria-describedby="input-helper-emphasis-inp20-help" />
        </div>
        <p className="inp20-help" id="input-helper-emphasis-inp20-help">Requests are signed with your workspace secret.</p>
      </div>
    </>
  );
}
