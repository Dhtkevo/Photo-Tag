import "./App.css";
import GamePhoto from "../components/GamePhoto/GamePhoto";

function App() {
  return (
    <div className="h-screen bg-amber-400 flex flex-col justify-center items-center">
      <h1 className="mb-6 font-bold text-6xl">Find the two characters!</h1>
      <GamePhoto />
    </div>
  );
}

export default App;
