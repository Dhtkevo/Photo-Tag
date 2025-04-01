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
  kevinFound,
  johnFound,
  charactersFound,
  setCharactersFound,
  startTime,
  setScore,
  score,
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
        kevinFound={kevinFound}
        johnFound={johnFound}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        startTime={startTime}
        setScore={setScore}
        score={score}
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
        kevinFound={kevinFound}
        johnFound={johnFound}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        startTime={startTime}
        setScore={setScore}
        score={score}
      />
    </div>
  );
}

export default CharacterSelectContainer;
