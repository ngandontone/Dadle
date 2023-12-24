import React from "react";
import Row from "./Row";

export default function Grid({currentGuess, guesses, turn, wordLength}) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return (
            <Row key={i} currentGuess={currentGuess} wordLength={wordLength} />
          );
        }
        return <Row key={i} guess={g} wordLength={wordLength} />;
      })}
    </div>
  );
}
