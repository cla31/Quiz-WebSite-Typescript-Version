const quiz = (questions: Question[]) => {

    console.log("Fonction quiz activée");    
    initializeDomElements();
    initializeVariables();
    console.log("info box",infoBox);
 
    if (infoBox) {
        infoBox.classList.add("info-box--active");
        if (modalElement) {
            modalElement.style.display = 'block';
        } else {
            console.error("Element with ID 'modal' not found");
        }
        console.log("info box", infoBox);
    } else {
        console.error("infoBox is null");
    }
    

    // Exit button
    const onExitQuizButtonClicked = (event: Event) => {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        } else {
            console.error("Element 'modal' not found");
        }
    }
    

    // Hide info
    const hideInfoBox = () => {
        if (infoBox) {
            infoBox.classList.remove("info-box--active");
        }
    }

    // Continue button
    const startQuiz = (event: Event) => {
        if (quizBox) {
            console.log("quizBox",quizBox);        
            hideInfoBox();
            quizBox.classList.add("quiz-box--active");
            console.log("quizBox",quizBox);   
            startTimer(timerDuration);
        }
    }
    


    // Quit quiz button
    const quitQuiz = (event: Event) => {
        window.location.reload();
    }

    // Replay button
    const restartQuiz = (event: Event) => {
        if (quizBox && resultBox && progressBar) {
            quizBox.classList.add("quiz-box--active");
            resultBox.classList.remove("result-box--active");
            shuffleArray(questions);
            queCount = 0;
            totalScore = 0;
            questionsDisplayed = 0;
            progressBar.style.width = "0%";
            questions[queCount].userHasSelected = false;
            questions[queCount].display();
            startTimer(timerDuration);
        } else {
            console.error("Some elements are null");
        }
    }
    

    // NextQuestion(), handleTimeout()
    const updateProgressBar = () => {
        if (progressBar) {
            const progressPercentage = (questionsDisplayed / 10) * 100;
            progressBar.style.width = progressPercentage + "%";
        }
    }
    

    // Next button
    const nextQuestion = (timerDuration: number) => {
        if (timerId) {
            clearInterval(timerId);
        }
    
        if (questions[queCount].userHasSelected) {
            queCount++;
            questionsDisplayed++;
    
            if (queCount < 10) {
                questions[queCount].display();
                startTimer(timerDuration);
            } else {
                showResultBox();
            }
    
            updateProgressBar();
        } else {
            alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
            startTimer(timeLeftInTimer);
        }
    
        questions[queCount].userHasSelected = false;
    };
    

    // StartQuiz(), NextQuestion, restartQuiz()
    const startTimer = (timerDuration: number) => {
        let timeLeft = timerDuration;
        // Intervalle
        timerId = setInterval(() => {
            if (timerElement) {
                if (timeLeft <= -1) {
                    clearInterval(timerId);
                    timerElement.textContent = "0 s";
                    handleTimeout();
                } else {
                    timerElement.textContent = `${timeLeft} s`;
                    timeLeft--;
                    timeLeftInTimer = timeLeft;
                }
            } else {
                console.error("timerElement is null");
            }
        }, 1000);
    }
    

     // Lorsque le temps s'est écoulé pour une question donnée.
     const handleTimeout = () => {
        // Si l'utilisateur n'a pas sélectionné de réponse et
        // s'il n'y a plus de questions à afficher, entre dans le "else"
        if (!(questions[queCount].userHasSelected) && (queCount === 10)) {
            showResultBox();
        } else {
            // Si les deux conditions ne sont pas remplies, entre dans le "if"
            alert("Temps écoulé, pas de points.");
            queCount++;
            questionsDisplayed++;
            updateProgressBar();
            questions[queCount].display();
            // Démarre une nouvelle minuterie.
            startTimer(timerDuration);
        }
    }

    const showResultBox = () => {
        if (infoBox && quizBox && resultBox) {
            infoBox.classList.remove("info-box--active");
            quizBox.classList.remove("quiz-box--active");
            resultBox.classList.add("result-box--active");
            
            // Pour s'assurer que scoreText est correctement initialisé en utilisant querySelector
            const scoreText = resultBox.querySelector(".result-box__score-text");
    
            if (scoreText) {
                let scoreMessage = '';
    
                if (totalScore === 10) {
                    scoreMessage = `Congrats, 10/10!! 👍 🥳, well done!! 💪`;
                } else {
                    if (totalScore > 5) {
                        scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
                    } else if (totalScore > 2) {
                        scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
                    } else {
                        scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
                    }
                }
    
                scoreText.innerHTML = `<span>${scoreMessage}</span>`;
            } else {
                console.error("scoreText is null");
            }
        } else {
            console.error("infoBox, quizBox, or resultBox is null");
        }
    }


    if (exitBtn && continueBtn && nextBtn && restartButton && quitButton) {
        exitBtn.addEventListener('click', onExitQuizButtonClicked);
        continueBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', (event: MouseEvent) => {
            // nextQuestion en passant le paramètre timerDuration
            nextQuestion(10);
        });
        restartButton.addEventListener('click', restartQuiz);
        quitButton.addEventListener('click', quitQuiz);
    }

    // Initialisation
    shuffleArray(questions);
    console.log("question queCount", questions[queCount]);
    questions[queCount].display();
};
