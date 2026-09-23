export default function BadgeGlow() {
  return (
    <span
      className="inline-flex items-center px-3 py-1
        text-xs font-semibold rounded-full
        bg-sky-500 text-white cursor-default
        transition-all duration-300
        hover:shadow-[0_0_16px_rgba(139,92,246,.6)]
        hover:scale-[1.04]"
    >
      Premium
    </span>
  );
}

