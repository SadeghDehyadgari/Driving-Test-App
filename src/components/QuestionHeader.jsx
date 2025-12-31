import formatTime from "../utils/formatTime";
import "../styles/QuestionHeader.css";

const QuestionHeader = ({ currentQuestion, totalQuestions, timeLeft }) => {
  return (
    <div className="question-header">
      <h2 className="question-title">
        Question {currentQuestion + 1} out of {totalQuestions}
      </h2>
      <div className="time-left">Time left: {formatTime(timeLeft)}</div>
    </div>
  );
};

export default QuestionHeader;
