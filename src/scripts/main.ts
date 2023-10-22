
const main = async (pathJson: string) => {
    try {  
        displayModal();
        const fetchQuestions = await getQuestions(pathJson);
        // console.log("fetch questions",fetchQuestions);
        //V1
        // const questions: Question[] = fetchQuestions.map((data: any) => {            
        //     return new Question(data.number, data.question, data.options, data.solution);
        // });
        //V2
        // const questions: Question[] = fetchQuestions.map((data: Question) => {
        //     return new Question(data.number, data.question, data.options, data.solution);
        // });
        //V3:
        const questions: Question[] = parseQuestions(fetchQuestions);
                
                   
        // console.log("questions modélisées en objet",questions);
        quiz(questions)
      

    } catch (erreur) {
        console.log(erreur);
    }
};


  
const pathJson: string = "./../datas/questions.json";

const startButton = document.querySelector(".start_btn") as HTMLElement | null;

if (startButton) {
    startButton.addEventListener('click', () => {
        // console.log("Mon super click dans la console !");
        main(pathJson);
    });
}

