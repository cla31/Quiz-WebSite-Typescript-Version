let queCount: number;
let questionsDisplayed: number;
let timerDuration: number;
let timerId: number | undefined;
let timeLeftInTimer: number;
let totalScore: number;

const pathJson: string = "./../datas/questions.json";
const modal = document.getElementById("modal") as HTMLElement;
const startButton = document.querySelector(".start_btn") as HTMLElement | null;

const initializeVariables = () => {    
    queCount = 0;
    questionsDisplayed = 0;
    timerDuration = 10;
    timerId = undefined;
    timeLeftInTimer = 0;
    totalScore = 0;
};



