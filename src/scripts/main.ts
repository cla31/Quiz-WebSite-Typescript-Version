
const main = async (pathJson: string) => {
    try {  
        const fetchQuestions = await fetchQuestionsFromJson(pathJson);
        const questions: Question[] = parseQuestions(fetchQuestions);
        const user = new User();
        runQuiz(questions, user);        
    } catch (error) {
        console.log(error);
    }
};

const startButton = document.querySelector(".start_btn") as HTMLElement | null;

if (startButton) {
    startButton.addEventListener('click', () => {
        main(pathJson);
    });
}

