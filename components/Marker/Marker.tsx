import React from "react";

interface MarkerProps {
  targetBox: { x: number; y: number } | null;
}

function Marker({ targetBox }: MarkerProps) {
  if (!targetBox) {
    console.error("SOMETHING WENT WRONG IN MARKER");
  }

  return (
    <p
      className="text-6xl bg-green-500 w-fit h-fit opacity-60 absolute"
      style={{ left: `${targetBox!.x}px`, top: `${targetBox!.y}px` }}
    >
      X
    </p>
  );
}

export default Marker;
