const updateProgressBar = (): void => {
    const progressPercentage: number = (questionsDisplayed / 10) * 100;
    progressBar.style.width = progressPercentage + "%";
};
