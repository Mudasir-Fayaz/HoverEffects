export default function InputGradientFocus() {
  return (
    <label className="block w-full max-w-[280px] text-xs font-medium text-slate-600">
      Repository
      <span className="mt-1.5 block rounded-xl bg-slate-200 p-px transition-colors duration-300 focus-within:bg-[linear-gradient(90deg,#6366f1,#0ea5e9)]">
        <input
          type="text"
          defaultValue="hover-effects"
          className="w-full rounded-[11px] bg-white px-4 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </span>
    </label>
  );
}
