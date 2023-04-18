import React, { useState, useEffect } from "react";
import StopWatch from "../../components/StopWatch/StopWatch";
import Countdown from "../../components/Countdown/Countdown";
import "./GamePage.scss";
import ShowPictures from "../../components/ShowPictures/ShowPictures";
import Level from "../../components/Level/Level";
import Score from "../../components/Score/Score";

function GamePage() {
  const [showComponent, setShowComponent] = useState(false);

  

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);

  return (

    <div className="game">
      <Countdown />
      {showComponent && <Score />}
      {showComponent && <Level />}
      {showComponent && <StopWatch />}
      <ShowPictures />
    </div>
  );
}

export default GamePage;
