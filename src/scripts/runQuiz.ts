const runQuiz = (questions:  Question[], user: User) => {
    displayModal(modal);
    initializeVariables();
    initializeDomElements()
    openQuizUI(infoBox)
    shuffleArray(questions);
    displayQuestions(questions[0], user)

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
        OnRestartQuiz(questions, user)
    });
    
    quitButton.addEventListener('click', () => {
        OnQuitQuizEnd();
    });
    
    
};
