class Question {
    number: number;
    question: string;
    options: string[];
    solution: number;

    constructor(number: number, question: string, options: string[], solution: number) {
        this.number = number;
        this.question = question;
        this.options = options;
        this.solution = solution;
    }

    getSolution() {
        if (this.solution >= 1 && this.solution <= this.options.length) {
            return this.options[this.solution - 1];
        } else {
            return "Solution non valide";
        }
    }
}
