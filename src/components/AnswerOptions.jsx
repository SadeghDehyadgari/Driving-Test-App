import Button from "./ui/Button";
import "../styles/AnswerOptions.css";

const AnswerOptions = ({ options, selectedIndex, onSelect }) => {
  return (
    <div className="answer-options">
      {options.map((option, index) => (
        <div key={index} className="answer-option">
          <Button
            selected={selectedIndex === index}
            onClick={() => onSelect(index)}
          >
            {option}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
