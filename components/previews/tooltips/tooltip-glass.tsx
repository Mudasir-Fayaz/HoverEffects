export default function TooltipGlass() {
  return (
    <div className="relative inline-flex group/tg">
      <button
        className="px-4 py-2 text-sm font-medium text-white
          bg-linear-to-r from-indigo-500 to-sky-500 rounded-lg cursor-pointer"
      >
        Hover Me
      </button>
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1.5 text-xs font-medium text-slate-800
          backdrop-blur-md bg-white/60 border border-white/80
          rounded-lg shadow-lg whitespace-nowrap pointer-events-none
          opacity-0 translate-y-1
          group-hover/tg:opacity-100 group-hover/tg:translate-y-0
          transition-all duration-200"
      >
        Glass tooltip
        <div
          className="absolute top-full left-1/2 -translate-x-1/2
            border-4 border-transparent border-t-white/80"
        />
      </div>
    </div>
  );
}

