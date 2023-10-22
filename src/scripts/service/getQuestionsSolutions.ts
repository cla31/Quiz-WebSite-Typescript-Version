async function getQuestions(pathJson: string): Promise<Array<{ prop1: number, prop2: string[], prop3: string, prop4: number }>> {
    try {
        const fetchQuestionsSolutions = await fetch(pathJson);
        const responseFetchQuestionsSolutions = await fetchQuestionsSolutions.json();
        return responseFetchQuestionsSolutions as Array<{ prop1: number, prop2: string[], prop3: string, prop4: number }>;
    } catch (erreur) {
        console.log(erreur);
        return []; // Tableau vide en cas d'erreur
    }
}


