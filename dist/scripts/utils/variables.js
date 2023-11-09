"use strict";
let questionCount;
let questionsDisplayed;
let timerDuration;
let timerId;
let timeLeftInTimer;
let totalScore;
const pathJson = "./../datas/questions.json";
const modal = document.getElementById("modal");
const startButton = document.querySelector(".start_btn");
const initializeVariables = () => {
    questionCount = 0;
    questionsDisplayed = 0;
    timerDuration = 10;
    timerId = undefined;
    timeLeftInTimer = 0;
    totalScore = 0;
};
