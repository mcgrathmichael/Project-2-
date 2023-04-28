// import { useState } from "react";
import "./Score.scss";
/* eslint-disable */
function Score({ score }) {
  // const [score, setScore] = useState(0);
  return (
    <div className="scoreTitle">
      <h3> Score : {score} </h3>
    </div>
  );
}

export default Score;
