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
const process = require("process");

// Vérifier qu'il n'y a qu'un seul argument passé au programme
if (process.argv.length !== 3) {
  console.log("usage: node interMajorityTest.js age");
  process.exit(1); // exit the program with code status 1
}

// Vérifier que l'argument passé au programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`);
  process.exit(1);
}

while (true) {
  const userFirstName = readlineSync.question("Hello, may I have your firstname? : ");
  const userName = readlineSync.question("And your family name? : ");
  const userMajority = readlineSync.question("What is the age of majority in your country : ");
  const userAge = readlineSync.question("What is your age? : ");

  const majority = Number(userMajority);
  const age = Number(userAge);

  //JE N'AI PAS REUSSI A FAIRE FONCTIONNER LA VERIFICATION DU NUMBER DE USERMAJORITY
  if (isNaN(userMajority)) {
    console.log(chalk.blue(`Sorry ${userFirstName}: "${userMajority}" is not a number, do it again!`));
    process.exit(1);
  }

  if (isNaN(userAge)) {
    console.log(chalk.blue(`Sorry ${userFirstName}: "${userAge}" is not a number, do it again!`));
    process.exit(1);
  }

  if (age < majority) {
    console.log(chalk.red(`Sorry ${userFirstName} ${userName} but you are minor and you can not vote.`));
  } else {
    console.log(chalk.green(`${userFirstName} ${userName} you are major and you can vote.`));
  }
}

/*
OUTPUT :

➜  exo-cmd-app git:(main) ✗ node interMajorityTest.js 21
Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is the age of majority in your country : 18
What is your age? : 57
Sylvie Mémain-Yé you are major and you can vote.(en vert)

Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is the age of majority in your country : 18
What is your age? : 17
Sorry Sylvie Mémain-Yé but you are minor and you can not vote.(en rouge)

Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is the age of majority in your country : 21
What is your age? : 19
Sorry Sylvie Mémain-Yé but you are minor and you can not vote.(en rouge)

➜  exo-cmd-app git:(main) ✗ node interMajorityTest.js 21
Hello, may I have your firstname? : Sylvie
And your family name? : Mémain-Yé
What is the age of majority in your country : 18
What is your age? : dix
Sorry Sylvie: "dix" is not a number, do it again! (en bleu)
➜  exo-cmd-app git:(main) ✗
*/
