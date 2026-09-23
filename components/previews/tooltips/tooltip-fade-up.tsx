export default function TooltipFadeUp() {
  return (
    <div className="relative inline-flex group/tt">
      <button
        className="px-4 py-2 text-sm font-medium text-white
          bg-indigo-500 rounded-lg cursor-pointer"
      >
        Hover Me
      </button>
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg
          whitespace-nowrap pointer-events-none
          opacity-0 translate-y-1
          group-hover/tt:opacity-100 group-hover/tt:translate-y-0
          transition-all duration-200"
      >
        This is a tooltip
        <div
          className="absolute top-full left-1/2 -translate-x-1/2
            border-4 border-transparent border-t-slate-900"
        />
      </div>
    </div>
  );
}
