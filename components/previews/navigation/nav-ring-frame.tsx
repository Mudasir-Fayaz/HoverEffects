import { navRingFrame } from "@/data/navigation/nav-ring-frame";

export default function NavRingFrame() {
  return (
    <>
      <style>{navRingFrame.css}</style>
      <nav className="nav-ring-frame" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
