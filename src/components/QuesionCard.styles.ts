import styled, { createGlobalStyle } from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #6a5fa2;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;

  .questionNr {
    align-self: flex-end;
    padding: 0 10px;
    color: #6a5fa2;
    font-weight: 100;
    position: absolute;
    top: -25px;
    background-color: #040462;
  }
  .question {
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0 10px;
    margin: 10px auto;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  .answer {
    width: 300px;
    margin: 10px;
    padding: 5px;
    background-color: #6a5fa2;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #040462;
    background-color: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "#E22414" : "#6a5fa2"};

    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      color: #040462;
    }
  }
`;
