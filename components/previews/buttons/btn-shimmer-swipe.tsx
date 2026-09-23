export default function BtnShimmerSwipe() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[20deg] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -left-[75%] w-[50%] group-hover:left-[125%]" />
      Hover Me
    </button>
  );
}
