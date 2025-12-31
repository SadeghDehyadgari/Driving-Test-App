import "../styles/QuestionText.css";

const QuestionText = ({ text, as = "p" }) => {
  const Tag = as;
  return <Tag className="question-text">{text}</Tag>;
};

export default QuestionText;
