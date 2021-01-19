import styled, {createGlobalStyle} from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: 1px solid #6A5FA2;
    border-radius:10px;
    padding: 20px;
    position: relative;

    .questionNr {
        align-self: flex-end;
        padding: 0 10px;
        color: #6A5FA2;
        font-weight:100;
        position: absolute;
        top: -25px;
        background-color:#040462;
    }
    .question {
        font-size: 1.2rem;
        font-weight: 300;
        padding: 0 10px;
        margin: 10px auto;
    }
    .answer {
        width: 300px;
        margin: 10px;
        padding: 5px;
        background-color:#6A5FA2;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.2rem;
        color:#040462;
        &:disabled {
            color:#040462;
        }
    }
`