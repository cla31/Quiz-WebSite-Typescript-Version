
const main = async (pathJson: string) => {
    try {  
        const fetchQuestions = await fetchQuestionsFromJson(pathJson);
        const questions: Question[] = parseQuestions(fetchQuestions);
        const user = new User();        
    } catch (error) {
        console.log(error);
    }
};

if (startButton) {
    startButton.addEventListener('click', () => {
        main(pathJson);
    });
}

