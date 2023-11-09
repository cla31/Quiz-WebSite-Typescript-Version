
let infoBox:  HTMLElement;
let option_list:  HTMLElement;
let question_text: HTMLElement;
let continueBtn: HTMLElement;
let exitBtn: HTMLElement;
let quizBox: HTMLElement;
let nextBtn: HTMLElement;
let resultBox: HTMLElement;
let progressBar: HTMLElement;
let timerElement: HTMLElement;
let restartButton: HTMLElement;
let quitButton: HTMLElement;
let scoreText: HTMLElement;


const initializeDomElements = () => {
    infoBox = document.querySelector(".info-box") as HTMLElement ;
    option_list = document.querySelector(".quiz-box__option") as HTMLElement ;
    question_text = document.querySelector(".quiz-box__question-text") as HTMLElement ;
    continueBtn = document.querySelector(".info-box__buttons .info-box__button--restart") as HTMLElement ;
    exitBtn = document.querySelector(".info-box__buttons .info-box__button--quit") as HTMLElement ;
    quizBox = document.querySelector(".quiz-box") as HTMLElement ;
    nextBtn = document.querySelector("footer .quiz-box__next-button") as HTMLElement ;
    resultBox = document.querySelector(".result-box") as HTMLElement ;
    progressBar = document.querySelector(".quiz-box__progress") as HTMLElement ;
    timerElement = document.querySelector(".quiz-box__timer-sec") as HTMLElement ;
    restartButton = resultBox.querySelector(".result-box__buttons .result-box__button--restart")  as HTMLElement;
    quitButton = resultBox.querySelector(".result-box__button--quit")  as HTMLElement;
    scoreText = resultBox.querySelector(".result-box__score-text")  as HTMLElement;
};



