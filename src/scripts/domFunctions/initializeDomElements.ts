
let infoBox:  HTMLElement;
let option_list:  HTMLElement | null;
let question_text: HTMLElement | null;
let continueBtn: HTMLElement | null;
let exitBtn: HTMLElement | null;
let quizBox: HTMLElement | null;
let nextBtn: HTMLElement | null;
let resultBox: HTMLElement | null;
let progressBar: HTMLElement | null;
let timerElement: HTMLElement | null;
let restartButton: HTMLElement | null;
let quitButton: HTMLElement | null;
let scoreText: HTMLElement | null;


const initializeDomElements = () => {
    infoBox = document.querySelector(".info-box") as HTMLElement ;
    option_list = document.querySelector(".quiz-box__option");
    question_text = document.querySelector(".quiz-box__question-text");
    continueBtn = document.querySelector(".info-box__buttons .info-box__button--restart");
    exitBtn = document.querySelector(".info-box__buttons .info-box__button--quit");
    quizBox = document.querySelector(".quiz-box");
    nextBtn = document.querySelector("footer .quiz-box__next-button");
    resultBox = document.querySelector(".result-box");
    progressBar = document.querySelector(".quiz-box__progress");
    timerElement = document.querySelector(".quiz-box__timer-sec");
    restartButton = resultBox ? resultBox.querySelector(".result-box__buttons .result-box__button--restart") : null;
    quitButton = resultBox ? resultBox.querySelector(".result-box__buttons .result-box__button--quit") : null;
    scoreText = resultBox ? resultBox.querySelector(".result-box__score-text") : null;
};



