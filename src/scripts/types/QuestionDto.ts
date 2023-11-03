class QuestionDto {
    constructor(
        public number: number,
        public question: string,
        public options: string[],
        public solution: number,
    ) {
    }
}