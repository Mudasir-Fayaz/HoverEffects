export default function TooltipScale() {
  return (
    <span className="group/ttscale relative inline-flex [perspective:520px]">
      <button
        type="button"
        aria-describedby="tooltip-scale-tip"
        className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white outline-none focus-visible:ring-3 focus-visible:ring-sky-500/40"
      >
        Release notes
      </button>
      <span
        id="tooltip-scale-tip"
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[9999] mb-2 w-44 origin-bottom -translate-x-1/2 rotate-x-90 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 backface-hidden shadow-sm shadow-slate-900/15 transition-[opacity,rotate] duration-300 ease-[cubic-bezier(0.4,1.15,0.4,1)] group-hover/ttscale:rotate-x-0 group-hover/ttscale:opacity-100 group-focus-within/ttscale:rotate-x-0 group-focus-within/ttscale:opacity-100"
      >
        v2.4 — faster previews and 40 new effects.
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-[1px] bg-slate-900"
        />
      </span>
    </span>
  );
}