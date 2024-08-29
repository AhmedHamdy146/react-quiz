import { useQuizContext } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuizContext();
  if (answer === null) return null;
  return (
    <>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: `${index < numQuestions - 1 ? "nextQuestion" : "finished"}`,
          })
        }
      >
        {index < numQuestions - 1 ? "Next" : "Finish"}
      </button>
    </>
  );
}

export default NextButton;
