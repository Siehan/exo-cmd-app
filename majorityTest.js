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
const process = require("process");

const MAJORITY = 18;

// Vérifier la ligne de commande
if (process.argv.length !== 3) {
  console.log("usage: node majorityTest.js age");
  process.exit(1);
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`);
  process.exit(1);
}

while (true) {
  const userFirstName = readlineSync.question("Hello, may I have your firstname? : ");
  const userName = readlineSync.question("And your family name? : ");
  const userAge = readlineSync.question("What is your age? : ");

  if (isNaN(userAge)) {
    console.log(chalk.blue(`Sorry ${userFirstName}: "${userAge}" is not a number, do it again!`));
    process.exit(1);
    //readlineSync.question("What is your age? ").userAge
  }

  const age = Number(userAge);

  if (age < MAJORITY) {
    console.log(chalk.red(`Sorry ${userFirstName} ${userName} but you are minor and you can not vote.`));
  } else {
    console.log(chalk.green(`${userFirstName} ${userName} you are major and you can vote.`));
  }
}

/*
OUTPUT :

➜  exo-cmd-app git:(main) ✗ node majorityTest.js
usage: node majorityTest.js age
➜  exo-cmd-app git:(main) ✗ node majorityTest.js 24
Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is your age? : 57
Sylvie Mémain-Yé you are major and you can vote. (en vert)

Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is your age? : 16
Sorry Sylvie Mémain-Yé but you are minor and you can not vote. (en rouge)

Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is your age? : dix
Sorry Sylvie: "dix" is not a number, do it again! (en bleu)

➜  exo-cmd-app git:(main) ✗ node majorityTest.js 17
Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is your age? : 18
Sylvie Mémain-Yé you are major and you can vote. (en vert)




OUTPUT exemple 1 :

exo-cmd-app git:(main) ✗ node majorityTest.js
Hello, may I have your firstname? Sylvie
And your family name? Mémain-Yé
What is your age? 17
Sorry Sylvie Mémain-Yé but you are minor and you can not vote. (couleur rouge)


OUTPUT exemple 2 :

exo-cmd-app git:(main) ✗ node majorityTest.js
Hello, may I have your firstname? Sylvie
And your family name? Mémain-Yé
What is your age? 57
Sylvie Mémain-Yé you are major and you can vote. (couleur verte)

OUTPUT exemple 3 :

Je voulais proposer à l'utilisateur de rentrer une nouvelle fois son âge
avec des chiffres mais je n'ai pas réussi pour l'instant.

  exo-cmd-app git:(main) ✗ node majorityTest.js
Hello, may I have your firstname? Sylvie
And your family name? Mémain-Yé
What is your age? dix
Sorry Sylvie: "dix" is not a number, do it again! (couleur bleue)
What is your age? 10
Sylvie Mémain-Yé you are major and you can vote.
➜  exo-cmd-app git:(main) ✗

*/
