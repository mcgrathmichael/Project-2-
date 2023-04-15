import React from "react";
import "./styles/Startbutton.scss";

function StartButton() {
  // The start button only appears when another button is clicked.
  // Animation should be smooth

  const showStartButton = () => {
    const startbtn = document.querySelector("#start");
    startbtn.style.display = "block";
  };

  const OpenGamePage = () => {};

  return (
    <>
      {/* Once the user enters his name and chosses a theme and clicks the Start btn, 
    he can go the game route */}
      <button
        className="myButton"
        type="submit"
        id="StartBtn"
        onClick={showStartButton}
      >
        theme
      </button>

      {/* onClick, timer starts */}
      <button
        type="submit"
        className="myButton"
        id="start"
        style={{ display: "none" }}
        onClick={OpenGamePage}
      >
        Start
      </button>
    </>
  );
}

export default StartButton;
