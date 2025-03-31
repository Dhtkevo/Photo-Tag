import React, { useState } from "react";
import TargetCircle from "../TargetCircle/TargetCircle";
import CharacterSelectContainer from "../CharacterSelectContainer/CharacterSelectContainer";
import Marker from "../Marker/Marker";

function GamePhoto() {
  const [targetBox, setTargetBox] = useState<{ x: number; y: number } | null>(
    null
  );
  const [kevinTargetBox, setKevinTargetBox] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [johnTargetBox, setJohnTargetBox] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [userSelecting, setUserSelecting] = useState(false);
  const [kevinFound, setKevinFound] = useState(false);
  const [johnFound, setJohnFound] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const imgRect = e.currentTarget.getBoundingClientRect();
    const targetBoxSize = 32;
    const x = e.clientX - imgRect.left - targetBoxSize;
    const y = e.clientY - imgRect.top - targetBoxSize;

    setTargetBox({ x, y });
    setUserSelecting(true);
  };

  return (
    <div className="border-2 border-black rounded-4xl shadow-2xl h-3/4 w-3/4 relative">
      <img
        src="src/assets/Photo-Tag.jpg"
        alt="Photo tagging picture"
        className="object-cover w-full h-full rounded-4xl"
        onClick={handleClick}
      />
      {kevinFound && <Marker targetBox={kevinTargetBox} />}
      {johnFound && <Marker targetBox={johnTargetBox} />}
      {userSelecting && (
        <>
          <TargetCircle targetBox={targetBox} />
          <CharacterSelectContainer
            targetBox={targetBox}
            setTargetBox={setTargetBox}
            setKevinFound={setKevinFound}
            setJohnFound={setJohnFound}
            setUserSelecting={setUserSelecting}
            setKevinTargetBox={setKevinTargetBox}
            setJohnTargetBox={setJohnTargetBox}
          />
        </>
      )}
    </div>
  );
}

export default GamePhoto;
