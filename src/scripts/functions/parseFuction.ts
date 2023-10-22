const parseQuestions = (data: any[]): Question[] => {
    return data.map((questionData: any) => {
        return new Question(questionData.number, questionData.question, questionData.options, questionData.solution);
    });
};
