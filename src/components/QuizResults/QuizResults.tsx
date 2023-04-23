import { useEffect, useState } from "react";
import { AnswersAPI } from "../../API/AnswersAPI";
import "./QuizResults.css";
import { IoMdCheckboxOutline, IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router";

interface quizResults {
  correctAnswers: number;
}
export default function QuizResults({ correctAnswers }: quizResults) {
  useEffect(() => {
    setTimeout(() => {
      setAnimatedHeight(300);
    }, 100);
  }, []);

  const [animatedHeight, setAnimatedHeight] = useState(0);
  const navigate = useNavigate();
  const tryAgain = () => {
    navigate("/");
    window.location.reload();
  };

  const analizeStatistic = () => {
    if (correctAnswers >= 7) {
      return (
        <>
          <IoMdCheckboxOutline style={{ color: "#4bb543" }} />
          <h2 style={{ color: "#4bb543" }}>Congratulations</h2>
        </>
      );
    } else if (correctAnswers > 3) {
      return (
        <>
          <IoMdCheckboxOutline style={{ color: "#C5D063" }} />
          <h2 style={{ color: "#C5D063" }}>Nice Try.. good job</h2>
        </>
      );
    }
    if (correctAnswers <= 3) {
      console.log(true);
      return (
        <>
          <IoMdCloseCircle style={{ color: "#FF0000" }} />
          <h2 style={{ color: "#FF0000" }}>Quiz Failed...</h2>
        </>
      );
    }
  };

  return (
    <div className="quiz-results" style={{ height: animatedHeight + "px" }}>
      <div className="results-header">{analizeStatistic()}</div>

      <div className="quiz-statistic">
        <h2>
          Results : {correctAnswers} / {AnswersAPI.length}
        </h2>
        <button onClick={tryAgain}>Try Again</button>
      </div>
    </div>
  );
}
