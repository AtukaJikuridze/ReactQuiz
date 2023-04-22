import { AiOutlineCheck } from "react-icons/ai";
import "./Quizheader.css";
import { AnswersAPI } from "../../../API/AnswersAPI";
import { useState } from "react";
interface quizHeader {
  answer: number | null;
  questionId: number;
  setAnswer: any;
  correctAnswers: number;
  setCorrectAnswers: any;
  setQuestionId: any;
}

export default function QuizHeader({
  answer,
  questionId,
  setAnswer,
  setQuestionId,
  correctAnswers,
  setCorrectAnswers,
}: quizHeader) {
  const [answerTimeout, setAnswerTimeout] = useState(false);

  const answerColorize = (answer: string, correctAnswer: string) => {
    return answer === correctAnswer ? "correct" : "incorrect";
  };

  const submitAnswer = (i: number) => {
    setAnswer(i);
    setAnswerTimeout(true);
    setTimeout(() => {
      setQuestionId((current: number) => current + 1);
      setAnswerTimeout(false);
    }, 1000);
    if (
      answer !== null &&
      AnswersAPI[questionId].answers[answer] ===
        AnswersAPI[questionId].correctAnswer
    ) {
      setCorrectAnswers((current: number) => current + 1);
    }
    console.log(answer);
  };
  return (
    <div className="quiz-header">
      {correctAnswers}
      <div className="header-text">
        <h1>Choose Answer</h1>
        <h3>
          {questionId + 1} / {AnswersAPI.length}
        </h3>
      </div>
      <ul>
        <h3>
          {questionId + 1}. {AnswersAPI[questionId].question}
        </h3>
      </ul>
      <div className="quiz-options">
        {AnswersAPI[questionId].answers.map((e: any, i: number) => (
          <div
            key={i}
            className={`option  ${
              answerTimeout
                ? answerColorize(e, AnswersAPI[questionId].correctAnswer)
                : ""
            }`}
            onClick={() => submitAnswer(i)}
          >
            <li>{e}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
