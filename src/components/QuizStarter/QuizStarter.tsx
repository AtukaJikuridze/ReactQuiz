import { useNavigate } from "react-router";
import "./QuizStarter.css";
import { useEffect, useState } from "react";
interface QuizStarterTypes {
  setCorrectAnswers: Function;
  setQuestionId: Function;
  setIsFinished: Function;
}
export default function QuizStarter({
  setCorrectAnswers,
  setQuestionId,
}: QuizStarterTypes) {
  useEffect(() => {
    setTimeout(() => {
      setAnimatedHeight(400);
    }, 100);
    setCorrectAnswers(0);
    setQuestionId(0);
  }, []);

  const navigate = useNavigate();
  const [animatedHeight, setAnimatedHeight] = useState(0);
  return (
    <div className="quiz-starter-box" style={{ height: animatedHeight + "px" }}>
      <h1>Start Quiz ...</h1>
      <button onClick={() => navigate("inQuiz")}>Start</button>
    </div>
  );
}
