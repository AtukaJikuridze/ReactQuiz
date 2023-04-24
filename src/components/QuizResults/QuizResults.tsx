import { useEffect, useState } from "react";
import { AnswersAPI } from "../../API/AnswersAPI";
import "./QuizResults.css";
import { useNavigate } from "react-router";
import { analizeStatistic } from "../AnalizeStatistic";

interface quizResults {
  correctAnswers: number;
  isFinished: boolean;
}
export default function QuizResults({
  correctAnswers,
  isFinished,
}: quizResults) {
  useEffect(() => {
    setTimeout(() => {
      setAnimatedHeight(300);
    }, 100);
    isFinished ? null : navigate("/ReactQuiz");
  }, []);

  const [animatedHeight, setAnimatedHeight] = useState(0);
  const navigate = useNavigate();
  const tryAgain = () => {
    navigate("/ReactQuiz");
    window.location.reload();
  };

  return (
    <div className="quiz-results" style={{ height: animatedHeight + "px" }}>
      <div className="results-header">{analizeStatistic(correctAnswers)}</div>

      <div className="quiz-statistic">
        <h2>
          Results : {correctAnswers} / {AnswersAPI.length}
        </h2>
        <button onClick={tryAgain}>Try Again</button>
      </div>
    </div>
  );
}
