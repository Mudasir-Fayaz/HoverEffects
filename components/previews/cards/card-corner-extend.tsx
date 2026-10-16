import { cardCornerExtend } from "@/data/cards/card-corner-extend";

export default function CornerExtendCard() {
  return (
    <>
      <style>{cardCornerExtend.css}</style>
      <article className="he-card-corner-extend" aria-labelledby="card-corner-extend-title">
      <div className="corners" aria-hidden="true">
        <i className="c-tl"></i><i className="c-tr"></i><i className="c-br"></i><i className="c-bl"></i>
      </div>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" />
        </svg>
      </span>
      <h2 id="card-corner-extend-title">Realtime collaboration</h2>
      <p className="body-copy">Multiplayer editing with presence, comments and version history — wired into the tools your team already uses.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">How collaboration works
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
