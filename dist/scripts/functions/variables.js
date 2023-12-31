"use strict";
let queCount;
let questionsDisplayed;
let timerDuration;
let timerId;
let timeLeftInTimer;
let totalScore;
let infoBox;
let continueBtn;
let exitBtn;
let quizBox;
let nextBtn;
let resultBox;
let progressBar;
let timerElement;
let restartButton;
let quitButton;
let scoreText;
let modalElement;
const pathJson = "./../datas/questions.json";
const startButton = document.querySelector(".start_btn");
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
