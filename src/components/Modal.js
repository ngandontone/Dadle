import React from "react";
import happyMark from "../images/happyMark.JPG";
import sadMark from "../images/sadMark.JPG";

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <img src={happyMark} alt="Correct"></img>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          <p>Atta boy!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Wrong Again!</h1>
          <img src={sadMark} alt="Wrong"></img>
          <p className="solution">{solution}</p>
          <p>Better Luck Next Time Buddy!</p>
        </div>
      )}
    </div>
  );
}
