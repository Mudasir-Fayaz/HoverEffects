export default function CursorIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 4L11.07 21L13.58 13.61L20.97 11.1Z"
        className="fill-neutral-500 dark:fill-neutral-400"
      />
    </svg>
  );
}
