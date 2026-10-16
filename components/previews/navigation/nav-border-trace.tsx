import { navBorderTrace } from "@/data/navigation/nav-border-trace";

export default function NavBorderTrace() {
  return (
    <>
      <style>{navBorderTrace.css}</style>
      <nav className="nav-border-trace" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
