

const fetchQuestionsFromJson = async (pathJson: string): Promise<Array<QuestionDto>> => {
    try {
        const response = await fetch(pathJson);
        const jsonData = await response.json();
        return jsonData as Array<QuestionDto>;
    } catch (erreur) {
        console.log(erreur);
        return []; // Tableau vide en cas d'erreur
    }
};
