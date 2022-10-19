import { computeHeadingLevel } from "@testing-library/react";
import React, { useState, useContext } from "react";
import { Question } from "../Question";
import { GameConext } from "../Store";

const Quiz = () => {
  const { score, setScore, gameState, setGameState } = useContext(GameConext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chooseOption, setChooseOption] = useState("");

  const chooseoptionHandler = (option) => {
    setChooseOption(option);
    console.log(option);
  };

  const nextQuestionHandler = () => {
    if (chooseOption === "") {
      alert("please choose options");
    } else {
      if (chooseOption === Question[currentQuestion].answer) {
        console.log("curract");
        console.log(score);
        setScore(score + 1);
      } else {
        console.log("wrong Answers");
      }

      // mode changé
      if (Question.length === currentQuestion + 1) {
        setGameState("End");
      }

      setCurrentQuestion(currentQuestion + 1);
    }
  };
  return (
    <div>
      <div className="quiz">
        <h1 className="Question">{Question[currentQuestion].prompt}</h1>
        <buton
          className="option"
          onClick={() => chooseoptionHandler("optionA")}
        >
          {Question[currentQuestion].optionA}
        </buton>
        <buton
          className="option"
          onClick={() => chooseoptionHandler("optionB")}
        >
          {Question[currentQuestion].optionB}
        </buton>
        <buton
          className="option"
          onClick={() => chooseoptionHandler("optionC")}
        >
          {Question[currentQuestion].optionC}
        </buton>
        <buton
          className="option"
          onClick={() => chooseoptionHandler("optionD")}
        >
          {Question[currentQuestion].optionD}
        </buton>

        <button className="next-btn" onClick={nextQuestionHandler}>
          {Question.length === currentQuestion + 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
        {console.log(
          " Question.length " +
            Question.length +
            " currentQuestion " +
            currentQuestion
        )}
      </div>
    </div>
  );
};

export default Quiz;
