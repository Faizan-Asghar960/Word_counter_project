#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorful Welcome message
console.log(chalk.bold.cyanBright("\n \t\tCode with Mr.Fazee - Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a sentence 
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: ",
    }
]);

// Trimming the sentence and splitting it into words based on spaces
let words = answer.sentence.trim().split(" ");

// Analysis of user input sentence 
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
