async function getQuestions(pathJson: string): Promise<Array<QuestionDto>> {
    try {
        const fetchQuestionsSolutions = await fetch(pathJson);
        const responseFetchQuestionsSolutions = await fetchQuestionsSolutions.json();
        return responseFetchQuestionsSolutions as Array<QuestionDto>;
    } catch (erreur) {
        console.log(erreur);
        return []; // Tableau vide en cas d'erreur
    }
}


