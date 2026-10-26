import Riddle from "./Riddle.js";
import readline from "readline-sync";

export default class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        super(id, name, taskDescription, correctAnswer);
        this.choices = choices;
    }

    ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        console.log(this.taskDescription);

        this.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });

        let answer = readline.question("Your answer: ");

        while (answer !== this.correctAnswer) {
            console.log("Wrong answer! Try again.");
            answer = readline.question("Your answer: ");
        }

        console.log("Correct!");
    }
}