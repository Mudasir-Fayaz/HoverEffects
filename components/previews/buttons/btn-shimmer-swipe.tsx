import { shimmerSwipeButton } from "@/data/buttons/shimmer-swipe";

export default function BtnShimmerSwipe() {
  return (
    <>
      <style>{shimmerSwipeButton.css}</style>
      <button type="button" className="btn-shimmer-swipe">
        Download file
      </button>
    </>
  );
}