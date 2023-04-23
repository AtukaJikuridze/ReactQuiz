import "./Quizheader.css";
import { AnswersAPI } from "../../../API/AnswersAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
interface quizHeader {
  answer: number | null;
  questionId: number;
  setAnswer: any;
  setCorrectAnswers: any;
  setQuestionId: any;
}

export default function QuizHeader({
  answer,
  questionId,
  setAnswer,
  setQuestionId,

  setCorrectAnswers,
}: quizHeader) {
  const [answerTimeout, setAnswerTimeout] = useState(false);
  const navigate = useNavigate();

  const answerColorize = (answer: string, correctAnswer: string) => {
    return answer === correctAnswer ? "correct" : "incorrect";
  };
  console.log(answer);

  useEffect(() => {
    if (answer !== null) {
      setAnswerTimeout(true);
      setTimeout(() => {
        setQuestionId((current: number) => current + 1);
        setAnswerTimeout(false);
      }, 1000);

      if (
        AnswersAPI[questionId].answers[answer] ==
        AnswersAPI[questionId].correctAnswer
      ) {
        setCorrectAnswers((current: number) => current + 1);
      }
      if (questionId + 1 === AnswersAPI.length) {
        navigate("/Results");
      }
      setAnswer(null);
    }
  }, [answer]);

  return (
    <div className="quiz-header">
      <div className="header-text">
        <h1>Choose Answer</h1>
        <h3>
          {questionId + 1} / {AnswersAPI.length}
        </h3>
      </div>
      <h3 className="question">
        {questionId + 1}. {AnswersAPI[questionId].question}
      </h3>
      <div className="quiz-options">
        {AnswersAPI[questionId].answers.map((e: any, i: number) => (
          <div
            key={i}
            className={`option  ${
              answerTimeout
                ? answerColorize(e, AnswersAPI[questionId].correctAnswer)
                : ""
            }`}
            onClick={() => setAnswer(i)}
          >
            <li>{e}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
