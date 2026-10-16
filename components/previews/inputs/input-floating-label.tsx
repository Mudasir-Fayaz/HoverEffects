export default function InputFloatingLabel() {
  return (
    <div className="relative w-full max-w-[280px]">
      <input
        id="float-email"
        type="email"
        placeholder=" "
        className="peer w-full rounded-xl border border-slate-200 bg-white px-4 pb-2 pt-5 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.12)]"
      />
      <label
        htmlFor="float-email"
        className="pointer-events-none absolute left-4 top-3.5 text-sm text-slate-400 transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        Email address
      </label>
    </div>
  );
}
