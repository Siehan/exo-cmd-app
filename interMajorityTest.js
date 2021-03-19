/*
interMajorityTest.js:
Le programme précédent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réécrivez le programme précédent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondra à l'âge de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21
Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18
Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
Utiliser readline-sync pour l'interaction avec l'utilisateur.
*/

const chalk = require("chalk");
const readlineSync = require("readline-sync");

const America = 21;
const France = 18;

const userName = readlineSync.question("Hello, may I have your family name?");
const userFirstName = readlineSync.question("May I have your firstname?");
const userCountry = readlineSync.question(`Do you live in France or in America?`);
const userAge = readlineSync.question("What is your age?");

if (userAge < America || userAge < France) {
  console.log(chalk.red(`Sorry ${userFirstName} ${userName} but you are minor and you can not vote.`));
} else {
  console.log(chalk.green(`${userFirstName} ${userName} you are major and you can vote.`));
}

/* node interMajorityTest.js
OUTPUT :
Hello, may I have your family name? Mémain-Yé
May I have your firstname? Sylvie
Do you live in France or in America? America
What is your age? 17
Sorry Sylvie Mémain-Yé but you are minor and you can not vote (en couleur rouge)
*/

/* node interMajorityTest.js
OUTPUT :
Hello, may I have your family name? Mémain-Yé
May I have your firstname? Sylvie
Do you live in France or in America? America
What is your age? 22
Sylvie Mémain-Yé you are major and you can vote. (en couleur verte)
*/
