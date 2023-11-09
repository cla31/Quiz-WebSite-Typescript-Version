"use strict";
const displayQuestions = (question, user) => {
    question_text.innerHTML = `<span>${question.number}. ${question.question}</span>`;
    console.log("this option list", option_list);
    option_list.innerHTML = '';
    console.log("question du displayQuestions", question);
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("quiz-box__option-item");
        optionElement.innerHTML = `<span>${option}</span>`;
        optionElement.addEventListener("click", () => {
            console.log("Hello", index);
            optionSelected(user, index, question);
        });
        if (option_list) {
            option_list.appendChild(optionElement);
        }
    });
};
const optionSelected = (user, answerIndex, question) => {
    // Si l'utilisateur a déjà sélectionné une réponse
    if (user.userHasSelected) {
        alert("Vous avez déjà sélectionné une réponse.");
        return;
    }
    const selectedOptionElement = option_list === null || option_list === void 0 ? void 0 : option_list.children[answerIndex];
    const userAns = (selectedOptionElement === null || selectedOptionElement === void 0 ? void 0 : selectedOptionElement.textContent) || '';
    const correctAns = question.getSolution();
    const totalOptions = question.options.length;
    let tickIconTag = '<div class="quiz-box__option--icon quiz-box__option--correct-icon"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="quiz-box__option--icon quiz-box__option--incorrect-icon"><i class="fas fa-times"></i></div>';
    if (userAns === correctAns) {
        user.score = 1;
        selectedOptionElement.classList.add("quiz-box__option-item--correct");
        selectedOptionElement.insertAdjacentHTML("beforeend", tickIconTag);
        totalScore += user.score;
    }
    else {
        selectedOptionElement.classList.add("quiz-box__option-item--incorrect");
        selectedOptionElement.insertAdjacentHTML("beforeend", crossIconTag);
        for (let i = 0; i < totalOptions; i++) {
            const option = option_list === null || option_list === void 0 ? void 0 : option_list.children[i];
            if ((option === null || option === void 0 ? void 0 : option.textContent) == correctAns) {
                option.classList.add("quiz-box__option-item--correct");
                option.insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    user.userHasSelected = true;
    for (let i = 0; i < totalOptions; i++) {
        const option = option_list === null || option_list === void 0 ? void 0 : option_list.children[i];
        option.classList.add("quiz-box__option-item--disabled");
    }
};