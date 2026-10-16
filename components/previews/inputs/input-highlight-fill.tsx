export default function InputHighlightFill() {
  return (
    <label className="block w-full max-w-[280px] text-xs font-medium text-slate-600">
      Search notes
      <input
        type="search"
        defaultValue="design tokens"
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-[background-color,border-color] duration-300 placeholder:text-slate-400 hover:border-indigo-200 hover:bg-indigo-50/40 focus:border-indigo-400 focus:bg-indigo-50/60"
      />
    </label>
  );
}
