import React from "react";
import CharacterSelect from "../CharacterSelect/CharacterSelect";

interface CharacterSelectContainerProps {
  targetBox: { x: number; y: number } | null;
  setTargetBox: (x: null | { x: number; y: number }) => void;
  setKevinFound: (x: boolean) => void;
  setJohnFound: (x: boolean) => void;
  setUserSelecting: (x: boolean) => void;
  setKevinTargetBox: (x: null | { x: number; y: number }) => void;
  setJohnTargetBox: (x: null | { x: number; y: number }) => void;
}

function CharacterSelectContainer({
  targetBox,
  setTargetBox,
  setKevinFound,
  setJohnFound,
  setUserSelecting,
  setKevinTargetBox,
  setJohnTargetBox,
}: CharacterSelectContainerProps) {
  return (
    <div
      className="w-36 h-16 absolute"
      style={{ left: `${targetBox!.x - 156}px`, top: `${targetBox!.y}px` }}
    >
      <CharacterSelect
        name="kevin"
        targetBox={targetBox}
        setTargetBox={setTargetBox}
        setKevinFound={setKevinFound}
        setJohnFound={setJohnFound}
        setUserSelecting={setUserSelecting}
        setKevinTargetBox={setKevinTargetBox}
        setJohnTargetBox={setJohnTargetBox}
      />
      <CharacterSelect
        name="john"
        targetBox={targetBox}
        setTargetBox={setTargetBox}
        setKevinFound={setKevinFound}
        setJohnFound={setJohnFound}
        setUserSelecting={setUserSelecting}
        setJohnTargetBox={setJohnTargetBox}
        setKevinTargetBox={setKevinTargetBox}
      />
    </div>
  );
}

export default CharacterSelectContainer;
