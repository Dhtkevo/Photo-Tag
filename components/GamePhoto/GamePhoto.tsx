import React from "react";

function GamePhoto() {
  return (
    <div className="border-2 border-black rounded-4xl shadow-2xl h-3/4 w-3/4">
      <img
        src="src/assets/Photo-Tag.jpg"
        alt="Photo tagging picture"
        className="object-cover w-full h-full rounded-4xl"
      />
    </div>
  );
}

export default GamePhoto;
