import { useQuizContext } from "../context/QuizContext";
import Difficulty from "./Difficulty";

function StartScreen() {
  const { numQuestions, dispatch, difficulty } = useQuizContext();
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <Difficulty dispatch={dispatch} difficulty={difficulty} />
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
