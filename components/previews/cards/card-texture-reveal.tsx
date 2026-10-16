import { cardTextureReveal } from "@/data/cards/card-texture-reveal";

export default function TextureRevealCard() {
  return (
    <>
      <style>{cardTextureReveal.css}</style>
      <article className="he-card-texture-reveal" aria-labelledby="card-texture-reveal-title">
      <span className="texture" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6M9 12h6M9 15h3" />
          </svg>
        </span>
        <h2 id="card-texture-reveal-title">Documentation engine</h2>
        <p className="body-copy">Markdown-first docs that build to a static site, version alongside your code and deploy straight to the edge.</p>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Read the technical notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
