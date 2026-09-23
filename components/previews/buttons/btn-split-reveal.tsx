export default function BtnSplitReveal() {
  return (
    <button className="group px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden">
      <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] mr-[1px] group-hover:-translate-x-[8px]">Ho</span>
      <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[8px]">ver</span>
    </button>
  );
}
