import Card from "./ui/Card";
import "../styles/ScoreSummary.css";

const ScoreSummary = ({ score, total }) => {
  const isPass = score > total * 0.7;

  return (
    <Card>
      <h2 className={`score-title ${isPass ? "pass" : "fail"}`}>
        {isPass ? "You passed!" : "You failed!"}
      </h2>
      <p className="score-text">
        You scored {score} out of {total}
      </p>
    </Card>
  );
};

export default ScoreSummary;
