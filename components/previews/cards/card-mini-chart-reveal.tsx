import { cardMiniChartReveal } from "@/data/cards/card-mini-chart-reveal";

export default function MiniChartRevealCard() {
  return (
    <>
      <style>{cardMiniChartReveal.css}</style>
      <article className="he-card-mini-chart-reveal" aria-labelledby="card-mini-chart-reveal-title">
      <p className="value">3.4×</p>
      <h2 id="card-mini-chart-reveal-title">Organic reach</h2>
      <p className="label">Last 12 weeks · sample data</p>
      <div className="chart" role="img" aria-label="Sample bar chart: organic reach rising over the last eight measured weeks">
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "30%", ["--i" as string]: "0" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "44%", ["--i" as string]: "1" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "38%", ["--i" as string]: "2" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "58%", ["--i" as string]: "3" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "52%", ["--i" as string]: "4" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "70%", ["--i" as string]: "5" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "84%", ["--i" as string]: "6" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "100%", ["--i" as string]: "7" }}></i></span>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">How reach is measured
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
