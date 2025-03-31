import React from "react";
import CharacterSelect from "../CharacterSelect/CharacterSelect";

interface CharacterSelectContainerProps {
  targetBox: { x: number; y: number };
}

function CharacterSelectContainer({
  targetBox,
}: CharacterSelectContainerProps) {
  return (
    <div
      className="w-36 h-16 absolute"
      style={{ left: `${targetBox.x - 156}px`, top: `${targetBox.y}px` }}
    >
      <CharacterSelect name="kevin" />
      <CharacterSelect name="john" />
    </div>
  );
}

export default CharacterSelectContainer;
