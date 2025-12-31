import Card from "./ui/Card";
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "./MediaDisplay";
import NavigationControls from "./NavigationControls";
import "../styles/QuestionView.css";

export default function QuestionView({
  q,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch,
}) {
  return (
    <Card>
      <QuestionHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft}
      />
      <div className="question-content">
        <div className="question-section">
          <QuestionText text={q.question} />
          <AnswerOptions
            options={q.options}
            selectedIndex={selectedAnswer}
            onSelect={onAnswer}
          />
        </div>
        {(q.type === "image" || q.type === "video") && (
          <MediaDisplay
            key={q.id}
            type={q.type}
            image={q.image}
            video={q.video}
          />
        )}
      </div>
      <NavigationControls
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        dispatch={dispatch}
      />
    </Card>
  );
}
