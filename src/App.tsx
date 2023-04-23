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
  return (
    <div>
      {correctAnswers}
      <Routes>
        <Route path="/">
          <Route path="/" index element={<QuizStarter />} />
          <Route
            path="/inQuiz"
            element={
              <Quizbox
                answer={answer}
                questionId={questionId}
                setAnswer={setAnswer}
                setCorrectAnswers={setCorrectAnswers}
                setQuestionId={setQuestionId}
              />
            }
          />
          <Route
            path="/Results"
            element={<QuizResults correctAnswers={correctAnswers} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
