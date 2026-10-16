import { inputIconCrossfade } from "@/data/inputs/input-icon-crossfade";

export default function InputIconCrossfade() {
  return (
    <>
      <style>{inputIconCrossfade.css}</style>
      <div className="field he-input-icon-crossfade">
        <label className="inp22-label" htmlFor="input-icon-crossfade-inp22-input">Repository</label>
        <div className="inp22-wrap">
          <span className="inp22-box" aria-hidden="true">
            <svg className="inp22-a" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3.5h7v9h-7z" /><path d="M6.5 6h3M6.5 8.5h3" /></svg>
            <svg className="inp22-b" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6.5 7.5 10 12 5" /></svg>
          </span>
          <input className="inp22-control" id="input-icon-crossfade-inp22-input" type="text" placeholder="org/repo" aria-describedby="input-icon-crossfade-inp22-help" />
        </div>
        <p className="inp22-help" id="input-icon-crossfade-inp22-help">Connect a repository to enable previews.</p>
      </div>
    </>
  );
}
