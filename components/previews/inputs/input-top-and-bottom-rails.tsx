import { inputTopAndBottomRails } from "@/data/inputs/input-top-and-bottom-rails";

export default function InputTopAndBottomRails() {
  return (
    <>
      <style>{inputTopAndBottomRails.css}</style>
      <div className="field he-input-top-and-bottom-rails">
        <label className="inp07-label" htmlFor="input-top-and-bottom-rails-inp07-input">API token</label>
        <div className="inp07-wrap">
          <input className="inp07-control" id="input-top-and-bottom-rails-inp07-input" type="text" placeholder="tok_live_…" aria-describedby="input-top-and-bottom-rails-inp07-help" />
          <i className="inp07-rail inp07-t" aria-hidden="true"></i>
          <i className="inp07-rail inp07-b" aria-hidden="true"></i>
        </div>
        <p className="inp07-help" id="input-top-and-bottom-rails-inp07-help">Rotate tokens every 90 days.</p>
      </div>
    </>
  );
}
