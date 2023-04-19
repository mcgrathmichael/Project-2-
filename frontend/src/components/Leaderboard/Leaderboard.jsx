import "./Leaderboard.scss";

function Leaderboard() {
  const board = [
    {
      id: 1,
      name: "dfdef",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "vavvarv",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "vvavav",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "dvav",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",

      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
    {
      id: 1,
      name: "",
      level: null,
      xp: null,
    },
  ];
  return (
    <div className="container">
      <div className="topLeadersList">
        {board.map((leader, index) => (
          <div className="leader" key={leader.id}>
            {index + 1 <= 3 && <div className="containerImage" />}
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
          <div>★</div>

          <div>Player</div>

          <div>MaxLvl</div>

          <div>Score</div>
        </div>
        <div className="list">
          {board.map((leader, index) => (
            <div className="player" key={leader.id}>
              <span> {index + 1}</span>
              <div className="user">
                <span> {leader.name} </span>
              </div>
              <span> {leader.level} </span>
              <span> {leader.xp} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
