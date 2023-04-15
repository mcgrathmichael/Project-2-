import React, { useState, useEffect } from "react";
import StopWatch from "../components/StopWatch";
import Countdown from "../components/Countdown";
import "../components/styles/Game.scss";
import ShowPictures from "../components/ShowPictures";
import Level from "../components/Level";
import Score from "../components/Score";

function Game() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);

  return (
    <div className="Game">
      <Countdown />
      {showComponent && <Score />}
      {showComponent && <Level />}
      {showComponent && <StopWatch />}
      <ShowPictures />
    </div>
  );
}

export default Game;
