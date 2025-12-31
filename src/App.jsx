import "./App.css";
import questions from "./data/questions";
import quizReducer from "./state/quizReducer";
import { useReducer, useEffect } from "react";
import QuestionView from "./components/QuestionView";
import ProgressBar from "./components/ProgressBar";
import AppBanner from "./components/AppBanner";
import ResultView from "./components/ResultView";

const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeLeft: 10 * 60,
};

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => quizReducer(state, action, questions.length),
    initialState
  );

  useEffect(() => {
    if (state.submitted || state.timeLeft <= 0) return;

    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.submitted, state.timeLeft]);

  useEffect(() => {
    if (state.timeLeft === 0 && !state.submitted) {
      dispatch({ type: "SUBMIT" });
    }
  }, [state.timeLeft, state.submitted]);

  const handleAnswer = (index) => {
    dispatch({ type: "ANSWER", payload: index });
  };

  const question_view = (
    <QuestionView
      q={questions[state.currentQuestion]}
      currentQuestion={state.currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      timeLeft={state.timeLeft}
      onAnswer={handleAnswer}
      dispatch={dispatch}
    />
  );

  const score = state.answers.reduce((acc, answer, idx) => {
    return answer === questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const result_view = (
    <ResultView score={score} questions={questions} answers={state.answers} />
  );

  return (
    <div className="app-container">
      <ProgressBar current={state.currentQuestion} total={questions.length} />
      <AppBanner />
      <div className="quiz-content">
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
}

export default App;
