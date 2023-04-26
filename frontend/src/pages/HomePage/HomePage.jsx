import { useState } from "react";
import InputUserName from "../../components/InputUsername/InputUsername";
import StartButton from "../../components/StartButton/StartButton";

function HomePage() {
  const [playerName, setPlayerName] = useState("");
  console.warn(playerName);
  return (
    <>
      <h1 className="header_text">Mashup Memo</h1>
      <InputUserName playername={playerName} setPlayerName={setPlayerName} />
      <StartButton />
      {/* <Leaderboard playerName={playerName}/> */}
    </>
  );
}

export default HomePage;
