import "./App.css";
import GamePhoto from "../components/GamePhoto/GamePhoto";
import { useEffect, useState } from "react";

function App() {
  const [kevinFound, setKevinFound] = useState(false);
  const [johnFound, setJohnFound] = useState(false);
  const [charactersFound, setCharactersFound] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    setDisplayScore(true);
  }, [score]);

  return (
    <div className="h-screen bg-amber-400 flex flex-col justify-center items-center">
      <h1 className="mb-6 font-bold text-6xl flex gap-4">
        Find{" "}
        <p className={`${kevinFound ? "text-green-500" : "text-red-600"}`}>
          Kevin
        </p>{" "}
        and{" "}
        <p className={`${johnFound ? "text-green-500" : "text-red-600"}`}>
          John
        </p>
        {displayScore && (
          <p className="text-black">- Score: {score} seconds!</p>
        )}
      </h1>
      <GamePhoto
        kevinFound={kevinFound}
        setKevinFound={setKevinFound}
        johnFound={johnFound}
        setJohnFound={setJohnFound}
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        startTime={startTime}
        setScore={setScore}
        score={score}
      />
    </div>
  );
}

export default App;
