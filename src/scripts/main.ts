
const main = async (pathJson: string) => {
    try {  
        displayModal();
        const fetchQuestions = await fetchQuestionsFromJson(pathJson);
        const questions: Question[] = parseQuestions(fetchQuestions);
        quiz(questions)
      
    } catch (error) {
        console.log(error);
    }
};

if (startButton) {
    startButton.addEventListener('click', () => {
        main(pathJson);
    });
}

