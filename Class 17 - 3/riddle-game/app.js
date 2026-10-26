import AllRiddles from "./riddles/index.js";
import readline from "readline-sync";
import Player from "./classes/Player.js";
import Riddle from "./classes/Riddle.js";
import MultipleChoiceRiddle from "./classes/MultipleChoiceRiddle.js";

console.log("Welcome to the Riddle Game!");

const name = readline.question("What is your name? ");

const player = new Player(name);

const riddles = AllRiddles.map(riddle => {

    if (riddle.choices) {
        return new MultipleChoiceRiddle(
            riddle.id,
            riddle.name,
            riddle.taskDescription,
            riddle.correctAnswer,
            riddle.choices
        );
    }

    return new Riddle(
        riddle.id,
        riddle.name,
        riddle.taskDescription,
        riddle.correctAnswer
    );
});

riddles.forEach(riddle => {
    const start = Date.now();

    riddle.ask();

    const end = Date.now();

    player.recordTime(start, end);
});

player.showStats();

