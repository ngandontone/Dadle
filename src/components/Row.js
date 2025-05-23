import React from "react";

export default function Row({guess, currentGuess, wordLength}) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(wordLength - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  var divs = [];
  for (var i = 0; i < wordLength; i++) {
    divs.push(<div key={i}></div>);
  }
  return <div className="row">{divs}</div>;
}
