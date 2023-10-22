
const main = async (pathJson: string) => {
    try {  
        displayModal();
        const fetchQuestions = await getQuestions(pathJson);
        const questions: Question[] = parseQuestions(fetchQuestions);
        quiz(questions)
      
    } catch (erreur) {
        console.log(erreur);
    }
};



if (startButton) {
    startButton.addEventListener('click', () => {
        // console.log("Mon super click dans la console !");
        main(pathJson);
    });
}

