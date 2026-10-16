export default function LinksIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
      <rect x="20" y="30" width="50" height="8" rx="4" className="fill-[var(--site-art-bg-strong)]" />
      <rect x="20" y="42" width="50" height="2" rx="1" className="fill-[var(--site-art-accent)]" />
      <rect x="20" y="52" width="34" height="6" rx="3" className="fill-[var(--site-art-bg-strong)]" />
      <path
        d="M84 34 L98 20 M90 20 H98 V28"
        className="fill-none stroke-[var(--site-art-stroke)] stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
