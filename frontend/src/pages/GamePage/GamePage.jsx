import "./GamePage.scss";
import GameLogic from "../../components/GameLogic/GameLogic";

function GamePage() {
  // hide these components for 5 seconds at the start of the game

  return (
    <div className="game">
      <GameLogic />
    </div>
  );
}

export default GamePage;
