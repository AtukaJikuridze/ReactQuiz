import { useState } from "react";
import { AnswersAPI } from "../../API/AnswersAPI";
import "./Quizbox.css";

import QuizHeader from "./QuizHeader/QuizHeader";
export default function Quizbox() {
  const [answer, setAnswer] = useState<number | null>(null);
  const [questionId, setQuestionId] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  return (
    <div className="quiz-box">
      <QuizHeader
        answer={answer}
        questionId={questionId}
        setAnswer={setAnswer}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
        setQuestionId={setQuestionId}
      />
    </div>
  );
}
