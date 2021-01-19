import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
    width: 100%;
}
body {
    background-color: #373A38;
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: "Lato" sans-serif;
    color: #A6A3A0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    h1 {
        font-size: 3rem;
        color: #A35160;
    }
    .score {
        font-weight: 700;
        color: #A35160;
        padding: 10px;
        border: 1px solid #373A38;
        background-color: #CBCBCB;
        border-radius: 10px;
    }
`