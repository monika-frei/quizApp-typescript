import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuesionCard.styles";

type Props = {
  question: string;
  answers: string[];
  cb: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  cb,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props) => {
  return (
    <Wrapper>
      <p className="questionNr">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={cb}
              className="answer"
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
