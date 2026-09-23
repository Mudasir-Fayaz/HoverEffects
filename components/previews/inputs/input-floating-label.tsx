export default function InputFloatingLabel() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder=" "
        className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-slate-200
          outline-none bg-white text-slate-700 text-sm
          transition-all duration-300
          focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.12)]"
      />
      <label
        className="absolute left-4 top-3.5 text-slate-400 text-sm
          transition-all duration-200 pointer-events-none
          peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-500
          peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs"
      >
        Email address
      </label>
    </div>
  );
}
