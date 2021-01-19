import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Category, Difficulty, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNr, setQuestionNr] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category, setCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const handleOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (
      value === Difficulty.EASY ||
      value === Difficulty.MEDIUM ||
      value === Difficulty.HARD
    ) {
      setDifficulty(value);
    } else if (
      value === Category.BOOKS ||
      value === Category.FILM ||
      value === Category.MUSIC
    ) {
      setCategory(value);
    }
  };

  const startTrivia = async () => {
    //zrób try catch
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty ? difficulty : Difficulty.EASY,
      category ? category : Category.MUSIC
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNr(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[questionNr].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[questionNr].question,
        answer,
        correct,
        correctAnswer: questions[questionNr].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNr + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNr((prev) => prev + 1);
    }
  };
  console.log(difficulty, category);

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quiz</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <>
            <h2>Category</h2>
            <div className="btn-wrapper">
              <button
                disabled={category ? true : false}
                value={Category.BOOKS}
                onClick={handleOptions}
                className="btn-options"
              >
                Books
              </button>
              <button
                disabled={category ? true : false}
                value={Category.FILM}
                onClick={handleOptions}
                className="btn-options"
              >
                Film
              </button>
              <button
                disabled={category ? true : false}
                value={Category.MUSIC}
                onClick={handleOptions}
                className="btn-options"
              >
                Music
              </button>
            </div>
            <h2>Difficulty</h2>
            <div className="btn-wrapper">
              <button
                disabled={difficulty ? true : false}
                value={Difficulty.EASY}
                onClick={handleOptions}
                className="btn-options"
              >
                Easy
              </button>
              <button
                disabled={difficulty ? true : false}
                value={Difficulty.MEDIUM}
                onClick={handleOptions}
                className="btn-options"
              >
                Medium
              </button>
              <button
                disabled={difficulty ? true : false}
                value={Difficulty.HARD}
                onClick={handleOptions}
                className="btn-options"
              >
                Hard
              </button>
            </div>
          </>
        )}

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button onClick={startTrivia} className="btn-nav">
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={questionNr + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[questionNr].question}
            answers={questions[questionNr].answers}
            userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
            cb={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === questionNr + 1 &&
          questionNr !== TOTAL_QUESTIONS - 1 && (
            <button onClick={nextQuestion} className="btn-nav">
              Next
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
