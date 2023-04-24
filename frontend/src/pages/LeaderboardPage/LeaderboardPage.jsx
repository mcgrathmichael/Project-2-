import Leaderboard from "../../components/Leaderboard/Leaderboard";

function LeaderboardPage({ playerName }) {
  return (
    <>
      <h1>Leaderboard</h1>
      <Leaderboard />
      <h1 className="header_text">Leaderboard</h1>;
      <Leaderboard />
    </>
  );
}

export default LeaderboardPage;
