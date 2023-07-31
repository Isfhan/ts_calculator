// Import third party packages
import chalk from "chalk";


// Import types
import { userInput } from "./types/input.js";


/**
* Show Answer
*/
export const showAnswer = (answer: number, input: userInput): void => {

    console.log(`
    Your first number is: ${chalk.green(input.num1)}
    Your second number is: ${chalk.green(input.num2)}
    Your Operation is: ${chalk.yellowBright(input.method)}
    Answer: ${chalk.bgWhite(chalk.black.bold(answer))}
    `);

}
