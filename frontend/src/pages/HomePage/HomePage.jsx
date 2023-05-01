import { useState } from "react";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import InputUserName from "../../components/InputUsername/InputUsername";
import "./HomePage.scss";

function HomePage() {
  const [playerName, setPlayerName] = useState("");
  console.warn(playerName);
  return (
    <>
      <h1 className="header_text">Mashup Memo</h1>
      <FetchButtons />
      <InputUserName playername={playerName} setPlayerName={setPlayerName} />
      {/* <Leaderboard playerName={playerName}/> */}
    </>
  );
}

export default HomePage;
