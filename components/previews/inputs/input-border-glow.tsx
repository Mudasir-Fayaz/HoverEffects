export default function InputBorderGlow() {
  return (
    <label className="block w-full max-w-[280px] text-xs font-medium text-slate-600">
      Workspace name
      <input
        type="text"
        defaultValue="Northwind"
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-slate-400 hover:border-indigo-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.15)]"
      />
    </label>
  );
}
