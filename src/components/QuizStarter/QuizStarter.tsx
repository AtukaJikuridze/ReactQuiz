import { useNavigate } from "react-router";
import "./QuizStarter.css";
export default function QuizStarter() {
  const navigate = useNavigate();
  return (
    <div className="quiz-starter-box">
      <h1>Start Quiz ...</h1>
      <button onClick={() => navigate("/inQuiz")}>Start</button>
    </div>
  );
}
