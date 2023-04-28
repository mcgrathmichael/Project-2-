import "./GamePage.scss";
import ShowPictures from "../../components/ShowPictures/ShowPictures";

function GamePage() {
  // hide these components for 5 seconds at the start of the game

  return (
    <div className="game">
      <ShowPictures />
    </div>
  );
}

export default GamePage;
