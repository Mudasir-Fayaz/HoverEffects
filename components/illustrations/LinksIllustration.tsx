export default function LinksIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
      <rect x="20" y="30" width="50" height="8" rx="4" className="fill-neutral-300 dark:fill-neutral-600" />
      <rect x="20" y="42" width="50" height="2" rx="1" className="fill-neutral-400 dark:fill-neutral-500" />
      <rect x="20" y="52" width="34" height="6" rx="3" className="fill-neutral-200 dark:fill-neutral-700" />
      <path
        d="M84 34 L98 20 M90 20 H98 V28"
        className="fill-none stroke-neutral-400 dark:stroke-neutral-500 stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
