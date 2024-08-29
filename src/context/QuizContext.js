import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;
const initialState = {
  totalQuestions: [],
  questions: [],

  // 'loading', 'error', 'ready', 'active', finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  difficulty: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        totalQuestions: action?.payload,
        questions: state.totalQuestions?.filter(
          (q) => q.points === state.difficulty
        ),
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "difficulty":
      return {
        ...state,
        difficulty: action.payload,
        questions: state.totalQuestions?.filter(
          (q) => q.points === action.payload
        ),
      };
    case "start":
      return {
        ...state,
        status: "active",

        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "answer":
      const question = state.questions[state.index];
      const points =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;
      return {
        ...state,
        answer: action.payload,
        points: points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScore: Math.max(state.highScore, state.points),
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        highScore: state.highScore,
        totalQuestions: state.totalQuestions,
        difficulty: state.difficulty,
        questions: state.totalQuestions.filter(
          (q) => q.points === state.difficulty
        ),
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        highScore: Math.max(state.highScore, state.points),
      };
    default:
      throw new Error("Unknown action");
  }
}
function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      difficulty,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  console.log(totalPoints);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        difficulty,
        dispatch,
        numQuestions,
        totalPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuizContext() {
  const context = useContext(QuizContext);
  if (context) return context;
  throw new Error("useQuizContext must be used within a QuizProvider");
}
export { QuizProvider, useQuizContext };
