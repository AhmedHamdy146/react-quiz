import { useQuizContext } from "../context/QuizContext";

function Question({ children }) {
  const { index, questions } = useQuizContext();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      {children}
    </div>
  );
}

export default Question;
