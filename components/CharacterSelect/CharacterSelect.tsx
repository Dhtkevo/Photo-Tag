import React from "react";

interface CharacterSelectProps {
  name: string;
}

function CharacterSelect({ name }: CharacterSelectProps) {
  return (
    <div className="bg-black w-36 h-8 opacity-60 flex justify-center items-center border-2 border-white hover:opacity-90 hover:cursor-pointer">
      <p className="text-white font-bold">{name}</p>
    </div>
  );
}

export default CharacterSelect;
