const levels = [
  { level: "Easy", points: 10 },
  { level: "Medium", points: 20 },
  { level: "Hard", points: 30 },
];
function Difficulty({ dispatch, difficulty }) {
  return (
    <div className="choices">
      {levels.map((el, index) => {
        return (
          <button
            key={index}
            onClick={() => dispatch({ type: "difficulty", payload: el.points })}
            className={`btn ${el.points === difficulty ? "active" : ""}`}
          >
            {el.level}
          </button>
        );
      })}
    </div>
  );
}

export default Difficulty;
