export default function TooltipScale() {
  return (
    <div className="relative inline-flex group/ts">
      <button
        className="px-4 py-2 text-sm font-medium text-white
          bg-sky-500 rounded-lg cursor-pointer"
      >
        Hover Me
      </button>
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
          whitespace-nowrap pointer-events-none origin-bottom
          scale-75 opacity-0
          group-hover/ts:scale-100 group-hover/ts:opacity-100
          transition-all duration-200"
      >
        Scales in!
        <div
          className="absolute top-full left-1/2 -translate-x-1/2
            border-4 border-transparent border-t-slate-900"
        />
      </div>
    </div>
  );
}

