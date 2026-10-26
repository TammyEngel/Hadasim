import readline from "readline-sync";

export default class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        console.log(this.taskDescription);

        let answer = readline.question("Your answer: ");

        while (answer !== this.correctAnswer) {
            console.log("Wrong answer! Try again.");
            answer = readline.question("Your answer: ");
        }

        console.log("Correct!");
    }
}


