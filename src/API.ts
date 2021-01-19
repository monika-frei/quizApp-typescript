import {shuffleArray} from "./utils"


export enum Difficulty  {
    EASY="easy",
    MEDIUM="medium",
    HARD="hard"
}

export enum Category {
    BOOKS= "10",
    FILM = "11",
    MUSIC = "12",

}

export type Question = {
    category: string,
    correct_answer: string,
    incorrect_answers: string[],
    difficulty: string,
    question: string;
    type: string
}

export type QuestionState = Question & ({answers: string[]})


export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, category: Category) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ( 
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}