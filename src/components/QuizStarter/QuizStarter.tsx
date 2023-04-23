import { useNavigate } from "react-router";
import "./QuizStarter.css";
import { useEffect, useState } from "react";
export default function QuizStarter() {
  useEffect(() => {
    setTimeout(() => {
      setAnimatedHeight(400);
    }, 100);
  }, []);

  const navigate = useNavigate();
  const [animatedHeight, setAnimatedHeight] = useState(0);
  return (
    <div className="quiz-starter-box" style={{ height: animatedHeight + "px" }}>
      <h1>Start Quiz ...</h1>
      <button onClick={() => navigate("/inQuiz")}>Start</button>
    </div>
  );
}
