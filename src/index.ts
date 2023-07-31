// Import third party packages
import inquirer from "inquirer";


// Import custom modules
import { Calculator } from "./calculator.js";
import { questions } from "./questions.js";
import { showAnswer } from "./answer.js";


// Import types
import { type userInput } from "./types/input.js";


// Prompt Questions and get user input
const input: userInput = await inquirer.prompt(
    questions
);


// Initialized calculator class
const calculator: Calculator = new Calculator(input.num1, input.num2);


// Check which method user want to invoke
const answer: number = calculator[input.method]();


// Show answer to terminal
showAnswer(answer as number, input);

