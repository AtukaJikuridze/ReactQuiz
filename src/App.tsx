import { Route, Routes } from "react-router";
import "./App.css";
import Quizbox from "./components/QuizBox/Quizbox";
import QuizResults from "./components/QuizResults/QuizResults";
import QuizStarter from "./components/QuizStarter/QuizStarter";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState<number | null>(null);
  const [questionId, setQuestionId] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  return (
    <Routes>
      <Route path="/ReactQuiz">
        <Route
          index
          element={
            <QuizStarter
              setCorrectAnswers={setCorrectAnswers}
              setQuestionId={setQuestionId}
              setIsFinished={setIsFinished}
            />
          }
        />
        <Route
          path="inQuiz"
          element={
            <Quizbox
              setIsFinished={setIsFinished}
              answer={answer}
              questionId={questionId}
              setAnswer={setAnswer}
              setCorrectAnswers={setCorrectAnswers}
              setQuestionId={setQuestionId}
            />
          }
        />
        <Route
          path="Results"
          element={
            <QuizResults
              correctAnswers={correctAnswers}
              isFinished={isFinished}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
