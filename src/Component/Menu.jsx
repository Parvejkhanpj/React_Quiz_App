import React, { useContext } from "react";
import { GameConext } from "../Store";

const Menu = () => {
  const { setGameState, userName, setUserName } = useContext(GameConext);

  const gameForword = () => {
    if (userName === "") {
      alert(" Please Enter Your Name");
    } else {
      setGameState("play");
      console.log("btn clicked");
    }
  };

  return (
    <div className="continer">
      <h1>Start Quiz Game</h1>
      <input
        type="text"
        placeholder="Ex- Parvej khan"
        className="input"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

      <button onClick={gameForword} className="start-btn">
        Start Now
      </button>
    </div>
  );
};

export default Menu;
