import React from "react";

import "./App.css";

function showRock() {
  document.querySelectorAll("#playerChoice img")[0].src =
    "https://cdn.icon-icons.com/icons2/1686/PNG/512/12020raisedfist_111487.png";
}
function showScissors() {
  document.querySelectorAll("#playerChoice img")[0].src =
    "https://cdn.icon-icons.com/icons2/1686/PNG/512/11959victoryhand_111462.png";
}
function showPaper() {
  document.querySelectorAll("#playerChoice img")[0].src =
    "https://cdn.icon-icons.com/icons2/1686/PNG/512/11996raisedhand_111512.png";
}
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
      <div id="playerChoice">
        <img src="https://www.hrica.gob.pe/images/cargando.gif"></img>
      </div>
      <div id="game">
        <div className="buttons-game" id="rock">
          <button
            value="rock"
            className="btn btn-outline-success"
            onClick={showRock}
          >
            Rock
            <img
              className="icons"
              src="https://cdn.icon-icons.com/icons2/1686/PNG/512/12020raisedfist_111487.png"
            ></img>
          </button>
          <button
            value="scissors"
            className="btn btn-outline-danger"
            onClick={showScissors}
          >
            Scissors
            <img
              className="icons"
              src="https://cdn.icon-icons.com/icons2/1686/PNG/512/11959victoryhand_111462.png"
            ></img>
          </button>
          <button
            value="paper"
            className="btn btn-outline-warning"
            onClick={showPaper}
          >
            Paper
            <img
              className="icons"
              src="https://cdn.icon-icons.com/icons2/1686/PNG/512/11996raisedhand_111512.png"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
