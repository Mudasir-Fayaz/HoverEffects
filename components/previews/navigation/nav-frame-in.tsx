import { navFrameIn } from "@/data/navigation/nav-frame-in";

export default function NavFrameIn() {
  return (
    <>
      <style>{navFrameIn.css}</style>
      <nav className="nav-frame-in" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home<span className="he-frame" aria-hidden="true" /></a>
        <a href="https://example.com">Gallery<span className="he-frame" aria-hidden="true" /></a>
        <a href="https://example.com">Portfolio<span className="he-frame" aria-hidden="true" /></a>
        <a href="https://example.com">Clients<span className="he-frame" aria-hidden="true" /></a>
        <a href="https://example.com">Contact<span className="he-frame" aria-hidden="true" /></a>
      </nav>
    </>
  );
}
