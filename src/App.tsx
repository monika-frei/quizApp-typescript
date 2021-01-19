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

  const startTrivia = async () => {
    //zrób try catch
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Category.BOOKS
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

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button onClick={startTrivia}>Start</button>
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
            <button onClick={nextQuestion}>Next</button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
