/*
majorityTest.js:

Un état vous demande d'écrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prénom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
Utiliser readline-sync pour l'interaction avec l'utilisateur
*/

const chalk = require("chalk");
const readlineSync = require("readline-sync");

// check command line
if (process.argv.length !== 3) {
  console.log("usage: node majorityTest.js age");
  process.exit(1);
}

// verify that the argument passed to the program can be converted to a number
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`);
  process.exit(1);
}

const MAJORITY = Number(process.argv[2]);

while (true) {
  let userFirstName = "";
  let userLastName = "";
  let userAge = "";

  // get the first name and check if it's completed or not
  while (userFirstName.length === 0) {
    userFirstName = readlineSync.question("Hello, may I have your first name? : ");
    if (userFirstName.length === 0) {
      console.log(chalk.yellow("Oups! You have to write your first name"));
      //Sans le while on peut inscrire continue OU process.exit(1) pour sortir du programme;
    }
  }
  // get the Last name and check if it's completed
  while (userLastName.length === 0) {
    userLastName = readlineSync.question("And your family name? : ");
    if (userLastName.length === 0) {
      console.log(chalk.yellow("Oups! You have to write your Last name"));
    }
  }
  // get age and check if it's a number
  while (userAge.length === 0 || isNaN(userAge)) {
    userAge = readlineSync.question("What is your age? : ");
    if (userAge.length === 0) {
      console.log(chalk.yellow(`Oups! ${userFirstName}, enter your age !`));
      continue;
    }
    if (isNaN(userAge)) {
      console.log(chalk.blue(`Sorry ${userFirstName}: "${userAge}" is not a number, try again!`));
      continue;
    }
  }

  age = Number(userAge);

  if (age < MAJORITY) {
    console.log(chalk.red(`Sorry ${userFirstName} ${userLastName} but you are minor and you can not vote.`));
  } else {
    console.log(chalk.green(`${userFirstName} ${userLastName} you are major so you can vote.`));
  }
}
