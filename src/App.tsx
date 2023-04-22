import { Route, Routes } from "react-router";
import "./App.css";
import Quizbox from "./components/QuizBox/Quizbox";
import QuizResults from "./components/QuizResults/QuizResults";
import QuizStarter from "./components/QuizStarter/QuizStarter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/" index element={<QuizStarter />} />
          <Route path="/inQuiz" element={<Quizbox />} />
          <Route path="/Results" element={<QuizResults />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
