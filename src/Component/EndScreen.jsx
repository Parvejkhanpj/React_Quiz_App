import React, { useContext } from "react";
import { GameConext } from "../Store";
import { Question } from "../Question";

const EndScreen = () => {
  const { userName, score, setGameState } = useContext(GameConext);

  function restart() {
    setGameState("menu");
  }
  return (
    <div className="EndScreen">
      <h2>You Have Sucessfully complete Quiz {userName}</h2>
      <h3>
        Your Score : {score} / {Question.length}
      </h3>
      <button className="restart-btn" onClick={restart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
