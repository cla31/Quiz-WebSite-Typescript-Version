"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = (pathJson) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchQuestions = yield fetchQuestionsFromJson(pathJson);
        const questions = parseQuestions(fetchQuestions);
        const user = new User();
        runQuiz(questions, user);
    }
    catch (error) {
        console.log(error);
    }
});
if (startButton) {
    startButton.addEventListener('click', () => {
        main(pathJson);
    });
}
const runQuiz = (questions, user) => {
    displayModal(modal);
    initializeVariables();
    initializeDomElements();
    openQuizUI(infoBox);
    shuffleArray(questions);
    displayQuestions(questions[0], user);
    exitBtn.addEventListener('click', () => {
        OnExitModal();
    });
    continueBtn.addEventListener('click', () => {
        OnContinueQuiz(questions, user);
    });
    nextBtn.addEventListener('click', () => {
        OnNextQuestion(questions, user);
    });
    restartButton.addEventListener('click', () => {
        OnRestartQuiz(questions, user);
    });
    quitButton.addEventListener('click', () => {
        OnQuitQuizEnd();
    });
};
const displayModal = (modal) => {
    if (modal) {
        modal.innerHTML = `
        <!-- <div class="info-box"> -->
        <div class="info-box"> 
            <div class="info-box__title"><span>Some Rules of this Quiz</span></div>
            <div class="info-box__list">
                <div class="info-box__item">1. You will have only <span>5 seconds</span> per each question.</div>
                <div class="info-box__item">2. Once you select your answer, it can't be undone.</div>
                <div class="info-box__item">3. You can't select any option once time goes off.</div>
                <div class="info-box__item">4. You can't exit from the Quiz while you're playing.</div>
                <div class="info-box__item">5. You'll get points on the basis of your correct answers.</div>
            </div>
            <div class="info-box__buttons">
                <button class="info-box__button--quit">Exit Quiz</button>
                <button class="info-box__button--restart">Continue</button>
            </div>
        </div>
    
        <!-- <div class="quiz-box"> -->
        <div class="quiz-box">
            <header class="quiz-box__header">
                <div class="quiz-box__title">Awesome Quiz Application</div>
                <div class="quiz-box__timer">
                    <div class="quiz-box__time-left-text">Time Left</div>
                    <div class="quiz-box__timer-sec"> </div>
                </div>
            </header>
            <section class="quiz-box__section">
                <div class="quiz-box__question-text">
                    <!-- question from JavaScript -->
                </div>
                <div class="quiz-box__option-list">
                    <div id="option_list" class="quiz-box__option">
                        <!-- options from JavaScript -->
                    </div>
                </div>
            </section>
    
            <footer class="quiz-box__footer">
                <div class="quiz-box__progress-bar">
                    <div class="quiz-box__progress"></div>
                </div>
                <button class="quiz-box__next-button">Next Que</button>
            </footer>
        </div>
    
        <!-- <div class="result-box "> -->
        <div class="result-box">
            <div class="result-box__icon">
                <i class="fas fa-crown"></i>
            </div>
            <div class="result-box__complete-text">You've completed the Quiz!</div>
            <div class="result-box__score-text">
    
            </div>
            <div class="result-box__buttons">
                <button class="result-box__button--restart">Replay Quiz</button>
                <button class="result-box__button--quit">Quit Quiz</button>
            </div>
        </div>`;
    }
    else {
        console.log("Pas de modal");
    }
};
const displayQuestions = (question, user) => {
    question_text.innerHTML = `<span>${question.number}. ${question.question}</span>`;
    console.log("this option list", option_list);
    option_list.innerHTML = '';
    console.log("question du displayQuestions", question);
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("quiz-box__option-item");
        optionElement.innerHTML = `<span>${option}</span>`;
        optionElement.addEventListener("click", () => {
            console.log("Hello", index);
            optionSelected(user, index, question);
        });
        if (option_list) {
            option_list.appendChild(optionElement);
        }
    });
};
const optionSelected = (user, answerIndex, question) => {
    // Si l'utilisateur a déjà sélectionné une réponse
    if (user.userHasSelected) {
        alert("Vous avez déjà sélectionné une réponse.");
        return;
    }
    const selectedOptionElement = option_list === null || option_list === void 0 ? void 0 : option_list.children[answerIndex];
    const userAns = (selectedOptionElement === null || selectedOptionElement === void 0 ? void 0 : selectedOptionElement.textContent) || '';
    const correctAns = question.getSolution();
    const totalOptions = question.options.length;
    let tickIconTag = '<div class="quiz-box__option--icon quiz-box__option--correct-icon"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="quiz-box__option--icon quiz-box__option--incorrect-icon"><i class="fas fa-times"></i></div>';
    if (userAns === correctAns) {
        user.score = 1;
        selectedOptionElement.classList.add("quiz-box__option-item--correct");
        selectedOptionElement.insertAdjacentHTML("beforeend", tickIconTag);
        totalScore += user.score;
    }
    else {
        selectedOptionElement.classList.add("quiz-box__option-item--incorrect");
        selectedOptionElement.insertAdjacentHTML("beforeend", crossIconTag);
        for (let i = 0; i < totalOptions; i++) {
            const option = option_list === null || option_list === void 0 ? void 0 : option_list.children[i];
            if ((option === null || option === void 0 ? void 0 : option.textContent) == correctAns) {
                option.classList.add("quiz-box__option-item--correct");
                option.insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    user.userHasSelected = true;
    for (let i = 0; i < totalOptions; i++) {
        const option = option_list === null || option_list === void 0 ? void 0 : option_list.children[i];
        option.classList.add("quiz-box__option-item--disabled");
    }
};
let infoBox;
let option_list;
let question_text;
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
const initializeDomElements = () => {
    infoBox = document.querySelector(".info-box");
    option_list = document.querySelector(".quiz-box__option");
    question_text = document.querySelector(".quiz-box__question-text");
    continueBtn = document.querySelector(".info-box__buttons .info-box__button--restart");
    exitBtn = document.querySelector(".info-box__buttons .info-box__button--quit");
    quizBox = document.querySelector(".quiz-box");
    nextBtn = document.querySelector("footer .quiz-box__next-button");
    resultBox = document.querySelector(".result-box");
    progressBar = document.querySelector(".quiz-box__progress");
    timerElement = document.querySelector(".quiz-box__timer-sec");
    restartButton = resultBox.querySelector(".result-box__buttons .result-box__button--restart");
    quitButton = resultBox.querySelector(".result-box__button--quit");
    scoreText = resultBox.querySelector(".result-box__score-text");
};
const openQuizUI = (infoBox) => {
    if (infoBox) {
        infoBox.classList.add("info-box--active");
        const modalElement = document.getElementById('modal');
        if (modalElement) {
            modalElement.style.display = 'block';
        }
        else {
            console.error("Modal element not found.");
        }
    }
    else {
        console.error("Info box element not provided.");
    }
};
const showResultBox = () => {
    infoBox.classList.remove("info-box--active");
    quizBox.classList.remove("quiz-box--active");
    resultBox.classList.add("result-box--active");
    // const scoreText = resultBox.querySelector(".result-box__score-text");
    let scoreMessage = '';
    if (totalScore === 10) {
        console.log("Bravo!!!!");
    }
    else {
        if (totalScore > 5) {
            scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
        }
        else if (totalScore > 2) {
            scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
        }
        else {
            scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
        }
    }
    scoreText.innerHTML = `<span>${scoreMessage}</span>`;
};
const startTimer = (timerDuration, questions, user) => {
    let timeLeft = timerDuration;
    // Intervalle
    timerId = setInterval(() => {
        // Si le temps est écoulé
        if (timeLeft <= -1) {
            // Arrêt de l'intervalle
            clearInterval(timerId);
            timerElement.textContent = "0 s";
            handleTimeout(questions, user);
            // Sinon décrémentation et affichage de la décrémentation
        }
        else {
            timerElement.textContent = `${timeLeft} s`;
            // Le temps restant est ici
            timeLeft--;
            timeLeftInTimer = timeLeft;
        }
    }, 1000);
};
// Lorsque le temps s'est écoulé pour une question donnée.
const handleTimeout = (questions, user) => {
    // Si l'utilisateur n'a pas sélectionné de réponse et
    // s'il n'y a plus de questions à afficher, entre dans le "else"
    if (!(user.userHasSelected) && (questionCount === 10)) {
        console.log("else de handle time out");
        console.log("questionCount du else de handle...", questionCount);
        showResultBox();
    }
    else {
        // Si les deux conditions ne sont pas remplies, entre dans le "if"
        alert("Temps écoulé, pas de points.");
        questionCount++;
        questionsDisplayed++;
        updateProgressBar();
        displayQuestions(questions[questionCount], user);
        console.log("If handleTimeout questionCount", questionCount);
        console.log("If handleTimeout questionDisplayed", questionsDisplayed);
        // Démarre une nouvelle minuterie.
        startTimer(timerDuration, questions, user);
    }
};
const updateProgressBar = () => {
    const progressPercentage = (questionsDisplayed / 10) * 100;
    progressBar.style.width = progressPercentage + "%";
};
const OnExitModal = () => {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
};
const OnContinueQuiz = (questions, user) => {
    infoBox.classList.remove("info-box--active");
    quizBox.classList.add("quiz-box--active");
    startTimer(timerDuration, questions, user);
};
const OnNextQuestion = (questions, user) => {
    // console.log("next question");
    console.log("question count", questionCount);
    console.log("nextQuestion début user.userHasSelected", user.userHasSelected);
    if (timerId) {
        clearInterval(timerId);
    }
    if (user.userHasSelected) {
        questionCount++;
        questionsDisplayed++;
        if (questionCount < 10) {
            // console.log("question inférieure à 10");
            // console.log("questionCount", questionCount);
            displayQuestions(questions[questionCount], user);
            startTimer(timerDuration, questions, user);
        }
        else {
            console.log("question supérieure à 10");
            showResultBox();
        }
        updateProgressBar();
    }
    else {
        alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
        startTimer(timeLeftInTimer, questions, user);
    }
    user.userHasSelected = false;
    console.log("question count", questionCount);
    console.log("nextQuestion fin user.userHasSelected", user.userHasSelected);
};
const OnRestartQuiz = (questions, user) => {
    quizBox.classList.add("quiz-box--active");
    resultBox.classList.remove("result-box--active");
    shuffleArray(questions);
    questionCount = 0;
    totalScore = 0;
    questionsDisplayed = 0;
    progressBar.style.width = "0%";
    user.userHasSelected = false;
    displayQuestions(questions[questionCount], user);
    startTimer(timerDuration, questions, user);
};
const OnQuitQuizEnd = () => {
    window.location.reload();
};
class Question {
    constructor(number, question, options, solution) {
        this.number = number;
        this.question = question;
        this.options = options;
        this.solution = solution;
    }
    getSolution() {
        if (this.solution >= 1 && this.solution <= this.options.length) {
            return this.options[this.solution - 1];
        }
        else {
            return "Solution non valide";
        }
    }
}
class User {
    constructor() {
        this.userHasSelected = false;
        this.score = 0;
    }
    setUserSelected(selected) {
        this.userHasSelected = selected;
    }
}
const fetchQuestionsFromJson = (pathJson) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(pathJson);
        const jsonData = yield response.json();
        return jsonData;
    }
    catch (erreur) {
        console.log(erreur);
        return []; // Tableau vide en cas d'erreur
    }
});
class QuestionDto {
    constructor(number, question, options, solution) {
        this.number = number;
        this.question = question;
        this.options = options;
        this.solution = solution;
    }
}
const parseQuestions = (data) => {
    return data.map((questionData) => {
        return new Question(questionData.number, questionData.question, questionData.options, questionData.solution);
    });
};
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
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
