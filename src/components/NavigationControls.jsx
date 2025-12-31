import Button from "./ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import "../styles/NavigationControls.css";

const NavigationControls = ({ currentQuestion, totalQuestions, dispatch }) => {
  return (
    <div className="navigation-controls">
      <Button
        onClick={() => dispatch({ type: "PREV" })}
        disabled={currentQuestion === 0}
        variant={
          currentQuestion === 0 ? "navigation-outline" : "navigation-selected"
        }
      >
        <ArrowLeft size={20} />
      </Button>
      {currentQuestion === totalQuestions - 1 ? (
        <Button
          onClick={() => dispatch({ type: "SUBMIT" })}
          variant="navigation-selected"
          title="submit test"
        >
          <CheckCircle size={20} />
        </Button>
      ) : (
        <Button
          onClick={() => dispatch({ type: "NEXT" })}
          variant="navigation-selected"
        >
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default NavigationControls;
