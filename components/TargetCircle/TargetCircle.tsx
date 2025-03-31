import React from "react";

interface TargetCircleProps {
  targetBox: { x: number; y: number } | null;
}

function TargetCircle({ targetBox }: TargetCircleProps) {
  return (
    <div
      className={`border-4 border-green-400 rounded-full font-bold text-3xl w-16 h-16 absolute`}
      style={{ left: `${targetBox!.x}px`, top: `${targetBox!.y}px` }}
    ></div>
  );
}

export default TargetCircle;
