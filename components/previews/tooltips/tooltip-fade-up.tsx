export default function TooltipFadeUp() {
  return (
    <span className="group/ttfade relative inline-flex">
      <button
        type="button"
        aria-describedby="tooltip-fade-up-tip"
        className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white outline-none transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-3 focus-visible:ring-indigo-500/40"
      >
        Storage used
      </button>
      <span
        id="tooltip-fade-up-tip"
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[9999] mb-2 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-sm shadow-slate-900/15 transition-[opacity,translate] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/ttfade:translate-y-0 group-hover/ttfade:opacity-100 group-focus-within/ttfade:translate-y-0 group-focus-within/ttfade:opacity-100"
      >
        68% of 10 GB in use
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-[1px] bg-slate-900"
        />
      </span>
    </span>
  );
}