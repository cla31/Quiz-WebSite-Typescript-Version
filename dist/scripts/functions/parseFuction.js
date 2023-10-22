"use strict";
const parseQuestions = (data) => {
    return data.map((questionData) => {
        return new Question(questionData.number, questionData.question, questionData.options, questionData.solution);
    });
};
