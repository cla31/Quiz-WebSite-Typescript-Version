const openQuizUI = (infoBox: HTMLElement): void => {
    if (infoBox) {
        infoBox.classList.add("info-box--active");

        const modalElement = document.getElementById('modal');
        if (modalElement) {
            modalElement.style.display = 'block';
        } else {
            console.error("Modal element not found.");
        }
    } else {
        console.error("Info box element not provided.");
    }
};
