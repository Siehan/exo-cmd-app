/*
guessNumber.js

Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande par le maitre du jeu. Le programme s'exécutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument de la ligne de commande du programme à son lancement, les messages suivant lui apparaîtront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert
Utiliser readline-sync pour l'interaction avec l'utilisateur.
*/

const chalk = require("chalk");
const readlineSync = require("readline-sync");
const process = require("process");

const SECRETNUMBER = 10;

// Vérifier qu'il n'y a qu'un seul argument passé au programme

if (process.argv.length !== 3) {
  console.log("usage: node guessNumber.js number");
  process.exit(1);
}

// Vérifier que l'argument passé au programme peut être converti en nombre

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`);
  process.exit(1);
}

while (true) {
  const number = readlineSync.question("Rentre un nombre entre 1 et 10 : ");
  if (isNaN(number)) {
    console.log(chalk.blue(`Sorry: "${number}" is not a number, do it again!`));
    process.exit(1);
  }
  if (number < SECRETNUMBER) {
    console.log(chalk.red("Nombre trop petit"));
  } else if (number > SECRETNUMBER) {
    console.log(chalk.red("Nombre trop grand"));
  } else {
    number === SECRETNUMBER;
    console.log(chalk.green("Bravo!"));
    process.exit(0);
  }
}

/*
OUTPUT =
➜  exo-cmd-app git:(main) ✗ node guessNumber.js 2
Rentre un nombre entre 1 et 10 : 8
Nombre trop petit
Rentre un nombre entre 1 et 10 : 9
Nombre trop petit
Rentre un nombre entre 1 et 10 : 10
Bravo!
*/
