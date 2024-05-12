import React, { useState } from "react";
import "./styles.css";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const choices = [ROCK, PAPER, SCISSORS];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);

    if (choice === computerRandomChoice) {
      setResult("Tie!");
    } else if (
      (choice === ROCK && computerRandomChoice === SCISSORS) ||
      (choice === SCISSORS && computerRandomChoice === PAPER) ||
      (choice === PAPER && computerRandomChoice === ROCK)
    ) {
      setResult("You Win!");
    } else {
      setResult("Computer Wins!");
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      {!userChoice && !result && (
        <div className="choices">
          <button onClick={() => handleChoice(ROCK)}>Rock</button>
          <button onClick={() => handleChoice(PAPER)}>Paper</button>
          <button onClick={() => handleChoice(SCISSORS)}>Scissors</button>
        </div>
      )}
      {userChoice && (
        <>
          <p>You chose {userChoice}</p>
          <p>Computer chose {computerChoice}</p>
          <h2>{result}</h2>
          <button onClick={resetGame}>Play Again</button>
        </>
      )}
    </div>
  );
}

export default App;
