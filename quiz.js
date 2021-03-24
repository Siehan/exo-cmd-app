/*
quiz.js

Ecrivez un qcm de 5 questions. Le joueur devra répondre aux questions
en entrant le nombre correspondant à la bonne réponse.
A la fin du qcm vous lui donnerez sa note qui correspondra au nombre de bonnes réponses sur les 5 questions.
Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: langage => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les exercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendue
2: Faux

Utiliser readline-sync pour l'interaction avec l'utilisateur.
*/

// EXERCICE NON TERMINE

const chalk = require("chalk");
const readlineSync = require("readline-sync");
const process = require("process");

const ANSWER = 0;

// Vérifier qu'il n'y a qu'un seul argument passé au programme
if (process.argv.length !== 3) {
  console.log("usage: node quiz.js number");
  process.exit(1);
}

// Vérifier que l'argument passé au programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`);
  process.exit(1);
}

//const quiz = ((q1, q2, q3, q3, q4, q5) = {});

while (true) {
  const userFirstName = readlineSync.question("Comment t'appelles-tu ? : ");
  const startTheQuiz = readlineSync.question(chalk.green(`Bonjour ${userFirstName}, commençons le quiz`));
  const q1 = readlineSync.question("Question 1 = Le C++ est un: 1: langage OU 2: compilateur ?");
  const choix = readlineSync.question("choisissez 1 ou 2 : ");

  const q2 = readlineSync.question(
    "Question 2 = TypeScript est une évolution de Javascript: 1: langage OU 2: compilateur ?"
  );
  const q3 = readlineSync.question(
    "Question 3 = Lire les cours avant de faire les exercices est inutile: 1: Vrai OU 2: Faux"
  );
  const q4 = readlineSync.question("Question 4 = react.js a été développé par Google: 1: Vrai OU 2: Faux");
  const q5 = readlineSync.question("Question 5 = Ethereum est une blockchain publique: 1: Vrai OU 2: Faux");

  if (q1 === 1) {
    console.log(chalk.green("langage"));
  } else {
    q1 === 2;
    console.log(chalk.red("mauvaise réponse"));
    //process.exit(0);
  }
}
