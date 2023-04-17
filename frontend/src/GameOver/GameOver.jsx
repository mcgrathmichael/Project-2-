import React from "react";
import "./GameOver.scss";
import "./GameOver.css";

export default function PopUp() {
  const GameOver = () => {
    const popup = document.querySelector(".popup");
    popup.style.display = "block";
  };
  return (
    <div className="App">
      <button onClick={GameOver} type="submit">
        Click{" "}
      </button>
      <div style={{ display: "none" }} className="popup">
        <h1 className="gameover">Game Over!</h1>
        <h2 className="message">You Lose!</h2>
        <h3 className="Lvl">LvL: 30</h3>
        <img className="logo" src=".\src\assets\logo.png"></img>
        <h3 className="score">SCORE: XXX</h3>

        <div>
          <button className="restart" type="submit">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
