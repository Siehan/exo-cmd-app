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

const userName = readlineSync.question("May I have your name?");
const userFirstName = readlineSync.question("May I have your firstname?");
const userAge = readlineSync.question("What is your age?");

if (userAge <= 18) {
  console.log(chalk.red(`Sorry ${userFirstName} ${userName} you are minor you can not vote`));
} else {
  console.log(chalk.green(`${userFirstName} ${userName} you are major you can vote`));
}

// node majorityTest.js

/*
OUTPUT exemple 1 :
May I have your name? : Mémain-Yé
May I have your firstname? Sylvie
What is your age? 57
Sylvie Mémain-Yé you are major you can vote (en couleur verte)
*
/*
OUTPUT exemple 2 :
May I have your name? Yé
May I have your firstname? Mathis
What is your age? 13
Sorry Mathis Yé you are minor you can not vote (en couleur rouge)
*/
