import React, { useState } from "react";
import rock from "./icons/rock.png";
import paper from "./icons/paper.png";
import scissors from "./icons/scissors.png";
import "./App.css";

function randomNum() {
  const randomNumb = Math.round(Math.random() * 2);
  return randomNumb;
}
const getCompChoice = randomNum();
let computerChoice = "";
if (getCompChoice === 0) {
  computerChoice = "paper";
} else if (getCompChoice === 1) {
  computerChoice = "scissors";
} else if (getCompChoice === 2) {
  computerChoice = "rock";
}

function App() {
  let computerChoice = "paper";
  const [currentChoice, setCurrentChoice] = useState({
    value: null,
    img: null,
  });
  const handleClick = (choice) => {
    setCurrentChoice(choice);
  };
  if (currentChoice.value === computerChoice) {
    console.log("draw");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Press START to start the game</h1>
        <a
          href="#game"
          className="p-3 mb-2 bg-success text-white"
          id="startButton"
        >
          Start
        </a>
      </header>
      <h1>Rock Paper Scissors THE GAME</h1>

      <div id="game">
        <div className="buttons-game" id="rock">
          <button
            value="rock"
            className="btn btn-outline-success"
            onClick={() => handleClick({ value: "rock", img: rock })}
          >
            Rock
            <img className="icons" src={rock}></img>
          </button>
          <button
            value="scissors"
            className="btn btn-outline-danger"
            onClick={() => handleClick({ value: "scissors", img: scissors })}
          >
            Scissors
            <img className="icons" src={scissors}></img>
          </button>
          <button
            value="paper"
            className="btn btn-outline-warning"
            onClick={() => handleClick({ value: "paper", img: paper })}
          >
            Paper
            <img className="icons" src={paper}></img>
          </button>
        </div>
        <div id="playerChoice">
          <img src={currentChoice}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
