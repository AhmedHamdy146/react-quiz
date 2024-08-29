import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Options from "./components/Options";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuizContext } from "./context/QuizContext";

function App() {
  const { status } = useQuizContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question>
              <Options />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </Question>
          </>
        )}
        {status === "finished" && <Result />}
      </Main>
    </div>
  );
}

export default App;
