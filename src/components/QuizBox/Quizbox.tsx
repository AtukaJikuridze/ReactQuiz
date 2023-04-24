import { useEffect, useState } from "react";
import "./Quizbox.css";

import QuizHeader from "./QuizHeader/QuizHeader";
interface QuizBox {
  answer: number | null;
  questionId: number;
  setAnswer: Function;
  setCorrectAnswers: Function;
  setQuestionId: Function;
  setIsFinished: Function;
}
export default function Quizbox({
  answer,
  questionId,
  setAnswer,
  setCorrectAnswers,
  setQuestionId,
  setIsFinished,
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
        setIsFinished={setIsFinished}
      />
    </div>
  );
}
