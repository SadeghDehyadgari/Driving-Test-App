import "../styles/AnswerFeedback.css";

const AnswerFeedback = ({ options, correctAnswer, userAnswer }) => {
  return (
    <div className="answer-feedback">
      {options.map((option, index) => {
        const isUserAnswer = userAnswer === index;
        const isCorrectAnswer = correctAnswer === index;
        const isWrongAnswer = isUserAnswer && !isCorrectAnswer;

        let className = "feedback-option";
        if (isCorrectAnswer) className += " correct";
        if (isWrongAnswer) className += " wrong";
        if (isUserAnswer) className += " user-selected";

        return (
          <div key={index} className={className}>
            {option}
            {isCorrectAnswer && " ✓"}
            {isWrongAnswer && " ✗"}
          </div>
        );
      })}
    </div>
  );
};

export default AnswerFeedback;
