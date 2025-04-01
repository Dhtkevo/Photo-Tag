import React from "react";

interface CharacterSelectProps {
  name: string;
  targetBox: { x: number; y: number } | null;
  setTargetBox: (x: null | { x: number; y: number }) => void;
  setKevinFound: (x: boolean) => void;
  setJohnFound: (x: boolean) => void;
  setUserSelecting: (x: boolean) => void;
  setKevinTargetBox: (x: null | { x: number; y: number }) => void;
  setJohnTargetBox: (x: null | { x: number; y: number }) => void;
}

function CharacterSelect({
  name,
  targetBox,
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
}: CharacterSelectProps) {
  const handleClick = async (e: React.MouseEvent<HTMLImageElement>) => {
    const selectedTargetCharacterName = e.currentTarget.innerText;
    const userClickCoordinates = targetBox;

    const response = await fetch("http://localhost:3000/validate/target", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        targetName: selectedTargetCharacterName,
        location: userClickCoordinates,
      }),
    });

    const responseJson = await response.json();

    if (responseJson.characterFound === true && name === "kevin") {
      setKevinFound(true);
      setKevinTargetBox(userClickCoordinates);

      setCharactersFound((oldCharFound) => {
        const newCount = oldCharFound + 1;

        if (newCount === 2) {
          const finalScore = (Date.now() - startTime) / 1000;
          setScore(finalScore);
          console.log(finalScore);
        }

        return newCount;
      });
    } else if (responseJson.characterFound === true && name === "john") {
      setJohnFound(true);
      setJohnTargetBox(userClickCoordinates);
      setCharactersFound((oldCharFound) => {
        const newCount = oldCharFound + 1;

        if (newCount === 2) {
          const finalScore = (Date.now() - startTime) / 1000;
          setScore(finalScore);
          console.log(finalScore);
        }

        return newCount;
      });
    }
    setUserSelecting(false);
  };

  return (
    <div className="bg-black w-36 h-8 opacity-60 border-2 border-white hover:opacity-90 hover:cursor-pointer">
      <p
        className="text-white font-bold w-full h-full flex justify-center items-center"
        onClick={handleClick}
      >
        {name}
      </p>
    </div>
  );
}

export default CharacterSelect;
