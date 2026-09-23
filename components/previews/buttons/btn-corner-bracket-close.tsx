export default function BtnCornerBracketClose() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer">
      <span className="absolute -top-[3px] -right-[3px] w-[10px] h-[10px] border-t-2 border-r-2 border-indigo-400 transition-all duration-400 group-hover:w-[calc(100%+6px)] group-hover:h-[calc(100%+6px)]" />
      <span className="absolute -bottom-[3px] -left-[3px] w-[10px] h-[10px] border-b-2 border-l-2 border-indigo-400 transition-all duration-400 group-hover:w-[calc(100%+6px)] group-hover:h-[calc(100%+6px)]" />
      Hover Me
    </button>
  );
}
