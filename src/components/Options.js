import { useQuizContext } from "../context/QuizContext";

function Options() {
  const { index, questions, answer, dispatch } = useQuizContext();
  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswered}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          onClick={() =>
            dispatch({
              type: "answer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
