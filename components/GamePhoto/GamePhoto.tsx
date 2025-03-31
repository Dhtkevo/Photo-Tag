import React, { useState } from "react";
import TargetCircle from "../TargetCircle/TargetCircle";

function GamePhoto() {
  const [targetBox, setTargetBox] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const imgRect = e.currentTarget.getBoundingClientRect();
    const targetBoxSize = 32;
    const x = e.clientX - imgRect.left - targetBoxSize;
    const y = e.clientY - imgRect.top - targetBoxSize;

    setTargetBox({ x, y });
  };

  return (
    <div className="border-2 border-black rounded-4xl shadow-2xl h-3/4 w-3/4 relative">
      <img
        src="src/assets/Photo-Tag.jpg"
        alt="Photo tagging picture"
        className="object-cover w-full h-full rounded-4xl"
        onClick={handleClick}
      />
      {targetBox && <TargetCircle targetBox={targetBox} />}
    </div>
  );
}

export default GamePhoto;
