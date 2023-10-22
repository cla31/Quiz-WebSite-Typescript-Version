"use strict";
const registerListeners = (listeners) => {
    listeners.forEach(([element, event, handler]) => {
        element.addEventListener(event, handler);
    });
};
// Fonction qui crée une liste de tableaux de listeners.
const createListeners = (exitQuiz, startQuiz, nextQuestion, restartQuiz, quitQuiz) => {
    return [
        [exitQuiz, 'click', exitQuizHandler],
        [startQuiz, 'click', startQuizHandler],
        [nextQuestion, 'click', nextQuestionHandler],
        [restartQuiz, 'click', restartQuizHandler],
        [quitQuiz, 'click', quitQuizHandler],
    ];
};
//Les gestionnaires d'événements correspondants à chaque élément
const exitQuizHandler = (event) => {
    // Code pour gérer le clic sur le bouton exit
};
const startQuizHandler = (event) => {
    // Code pour gérer le clic sur le bouton start
};
const nextQuestionHandler = (event) => {
    // Code pour gérer le clic sur le bouton next
};
const restartQuizHandler = (event) => {
    // Code pour gérer le clic sur le bouton restart
};
const quitQuizHandler = (event) => {
    // Code pour gérer le clic sur le bouton quit
};
