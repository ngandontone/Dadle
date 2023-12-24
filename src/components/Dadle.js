import React, {useEffect, useState} from "react";
import useDadle from "../hooks/useDadle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Dadle({solution, wordLength}) {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} =
    useDadle(solution, wordLength);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect]);

  return (
    <div>
      {/* <div>question - {question}</div> */}
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        wordLength={wordLength}
      />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
