export default function TooltipGlass() {
  return (
    <span className="group/ttglass relative inline-flex">
      <button
        type="button"
        aria-describedby="tooltip-glass-tip"
        className="rounded-lg bg-[linear-gradient(90deg,#8b5cf6,#f43f5e)] px-4 py-2 text-sm font-medium text-white outline-none focus-visible:ring-3 focus-visible:ring-violet-500/40"
      >
        Deployment status
      </button>
      <span
        id="tooltip-glass-tip"
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[9999] mb-2 -translate-x-1/2 translate-y-2 overflow-hidden rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm shadow-slate-900/15 [clip-path:inset(0_0_100%_0)] transition-[clip-path,translate] duration-300 ease-out group-hover/ttglass:translate-y-0 group-hover/ttglass:[clip-path:inset(0_0_0_0)] group-focus-within/ttglass:translate-y-0 group-focus-within/ttglass:[clip-path:inset(0_0_0_0)]"
      >
        Production is healthy
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/2 -translate-x-[250%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 ease-out group-hover/ttglass:translate-x-[250%] group-focus-within/ttglass:translate-x-[250%]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </span>
    </span>
  );
}