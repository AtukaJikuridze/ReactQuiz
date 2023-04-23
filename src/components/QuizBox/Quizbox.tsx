import { useEffect, useState } from "react";
import "./Quizbox.css";

import QuizHeader from "./QuizHeader/QuizHeader";
interface QuizBox {
  answer: number | null;
  questionId: number;
  setAnswer: any;
  setCorrectAnswers: any;
  setQuestionId: any;
}
export default function Quizbox({
  answer,
  questionId,
  setAnswer,
  setCorrectAnswers,
  setQuestionId,
}: QuizBox) {
  useEffect(() => {
    setAnimatedHeight(400);
  }, []);

  const [animatedHeight, setAnimatedHeight] = useState(0);
  return (
    <div className="quiz-box" style={{ height: animatedHeight + "px" }}>
      <QuizHeader
        answer={answer}
        questionId={questionId}
        setAnswer={setAnswer}
        setCorrectAnswers={setCorrectAnswers}
        setQuestionId={setQuestionId}
      />
    </div>
  );
}
