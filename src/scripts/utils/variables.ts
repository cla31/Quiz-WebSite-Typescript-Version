let queCount: number;
let questionsDisplayed: number;
let timerDuration: number;
let timerId: number | undefined;
let timeLeftInTimer: number;
let totalScore: number;

let infoBox: HTMLElement | null;
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
let modalElement: HTMLElement | null;

const pathJson: string = "./../datas/questions.json";
const modal = document.getElementById("modal") as HTMLElement | null;
const startButton = document.querySelector(".start_btn") as HTMLElement | null;

const initializeVariables = () => {    
    queCount = 0;
    questionsDisplayed = 0;
    timerDuration = 10;
    timerId = undefined;
    timeLeftInTimer = 0;
    totalScore = 0;
};

const initializeDomElements = () => {
    infoBox = document.querySelector(".info-box");
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
    modalElement = document.getElementById('modal');
};
