import { useState } from "react";
import InputUserName from "../../components/InputUsername/InputUsername";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import StartButton from "../../components/StartButton/StartButton";
import Leaderboard from "@components/Leaderboard/Leaderboard";

function HomePage() {
  const [playerName, setPlayerName] = useState("");
  console.log(playerName);
  return (
    <>
      <h1 className="header_text">Mashup Memo</h1>
      <InputUserName playername={playerName} setPlayerName={setPlayerName} />
      <FetchButtons />
      <StartButton />
      {/* <Leaderboard playerName={playerName}/> */}
      </>
  );
}

export default HomePage;
