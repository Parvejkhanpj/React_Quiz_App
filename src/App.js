import React, { useState } from "react";
import "./App.css";
import { GameConext } from "./Store";
import Menu from "./Component/Menu";
import Quiz from "./Component/Quiz";
import EndScreen from "./Component/EndScreen";

const App = () => {
  // [''menu', 'playing', "endScreen"]
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div>
      <GameConext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "play" && <Quiz />}
        {gameState === "End" && <EndScreen />}
      </GameConext.Provider>
    </div>
  );
};

export default App;
