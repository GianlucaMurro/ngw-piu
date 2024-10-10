import { useState, useEffect } from "react";
import "./Game.css";

export default function Game() {
  const [yourPick, setYourPick] = useState("");
  const [opponentPick, setOpponentPick] = useState("");
  const [endGameText, setEndGameText] = useState("Take your pick!");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const choiches = ["rock", "paper", "scissors"];

  const versus = () => {
    let randomPick = Math.floor(Math.random() * 3);
    setOpponentPick(choiches[randomPick]);
    switch (yourPick) {
      case "rock":
        if (opponentPick == "rock") setEndGameText("Draw!");
        if (opponentPick == "paper") setEndGameText("You Lose!");
        if (opponentPick == "scissors") setEndGameText("You Win!");
        break;
      case "paper":
        if (opponentPick == "rock") setEndGameText("You Win!");
        if (opponentPick == "paper") setEndGameText("Draw!");
        if (opponentPick == "scissors") setEndGameText("You Lose!");
        break;
      case "scissors":
        if (opponentPick == "rock") setEndGameText("You Lose!");
        if (opponentPick == "paper") setEndGameText("You Win!");
        if (opponentPick == "scissors") setEndGameText("Draw!");
        break;
    }
    switch (endGameText) {
      case "You Win!":
        setWins(wins + 1);
        break;
      case "You Lose!":
        setLosses(losses + 1);
        break;
      case "Draw!":
        setDraws(draws + 1);
        break;
    }
  };

  const chooseRock = () => {
    setYourPick("rock");
    versus();
  };
  const choosePaper = () => {
    setYourPick("paper");
    versus();
  };
  const chooseScissors = () => {
    setYourPick("scissors");
    versus();
  };

  return (
    <div className="container">
      <div className="options">
        <div className="rock" onClick={chooseRock}>
          Rock
        </div>
        <div className="paper" onClick={choosePaper}>
          Paper
        </div>
        <div className="scissors" onClick={chooseScissors}>
          Scissors
        </div>
      </div>
      <div className="clash">
        <div className="popup">
          <h3>{endGameText}</h3>
        </div>
        <div className="you">
          <h3>You</h3>
          <h1 className="yourPick">{yourPick}</h1>
        </div>
        <div className="opponent">
          <h3>Opponent</h3>
          <h1 className="opponentPick">{opponentPick}</h1>
        </div>
      </div>
    </div>
  );
}
