import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
    width: 100%;
}
body {
    background-color: #040462;
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: "Lato" sans-serif;
    color: #FBFBFC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    color: #6a5fa2;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 100;
    margin: 20px 0 0 0;
    color: #6a5fa2;
    align-self: flex-start;
    padding-left: 30px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .score {
    font-weight: 700;
    color: #fbfbfc;
    padding: 10px;
    border: 1px solid #e25c4e;
    background-color: #e22414;
    border-radius: 10px;
  }
  .btn-options {
    background-color: #f2aba6;
    border: 2px solid #e25c4e;
    border-radius: 20px;
    margin: 5px 10px;
    width: 200px;
    height: 60px;
    cursor: pointer;
    font-size: 1.6rem;
    color: #e22414;
    &:hover,
    &:active {
      background-color: #e25c4e;
      color: #fbfbfc;
    }
    &:active {
      transform: scale(1.1);
    }
  }
  .btn-choice {
    background-color: #e25c4e;
    color: #fbfbfc;
  }
  .btn-nav {
    background-color: #e22414;
    border: 2px solid #e25c4e;
    border-radius: 20px;
    margin: 80px auto;
    width: 200px;
    height: 80px;
    cursor: pointer;
    font-size: 1.8rem;
    color: #fbfbfc;
  }
`;
