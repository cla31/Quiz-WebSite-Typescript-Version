const parseQuestions = (data: QuestionDto[]): Question[] => {
    return data.map((questionData: QuestionDto) => {
        return new Question(questionData.number, questionData.question, questionData.options, questionData.solution);
    });
};
