import "./Leaderboard.scss";

function Leaderboard() {
  const dados = [
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
        {dados.map((leader, index) => (
          <div className="leader" key={leader.id}>
            {index + 1 <= 3 && (
              <div className="containerImage">
                <div className="leaderName">{leader.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
          <div>#</div>

          <div>Pseudo</div>

          <div>LVL</div>

          <div>Score</div>
        </div>
        <div className="list">
          {dados.map((leader, index) => (
            <div className="player" key={leader.id}>
              <span> {index + 1}</span>
              <div className="user">
                <img className="image" src={leader.image} alt="user" />
                <span> {leader.name} </span>
              </div>
              <span> {leader.level} </span>
              <span> {leader.lvl} </span>
              <span> {leader.xp} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
