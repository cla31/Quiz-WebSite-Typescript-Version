"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = (pathJson) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        displayModal();
        const fetchQuestions = yield getQuestions(pathJson);
        console.log("fetch questions", fetchQuestions);
        // const questions: Question[] = fetchQuestions.map((data: any) => {            
        //     return new Question(data.number, data.question, data.options, data.solution);
        // });
        // const questions: Question[] = fetchQuestions.map((data: Question) => {
        //     return new Question(data.number, data.question, data.options, data.solution);
        // });
        const questions = parseQuestions(fetchQuestions);
        console.log("questions modélisées en objet", questions);
        quiz(questions);
    }
    catch (erreur) {
        console.log(erreur);
    }
});
const pathJson = "./../datas/questions.json";
const startButton = document.querySelector(".start_btn");
if (startButton) {
    startButton.addEventListener('click', () => {
        // console.log("Mon super click dans la console !");
        main(pathJson);
    });
}
