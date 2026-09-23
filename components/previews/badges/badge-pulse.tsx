export default function BadgePulse() {
  return (
    <span
      className="relative inline-flex items-center gap-1.5
        px-3 py-1 text-xs font-semibold rounded-full
        bg-emerald-50 text-emerald-600 border border-emerald-200
        cursor-default transition-all duration-300
        hover:shadow-[0_0_12px_rgba(16,185,129,.25)] hover:bg-emerald-100"
    >
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full
            rounded-full bg-emerald-400 opacity-75"
        />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Live
    </span>
  );
}
