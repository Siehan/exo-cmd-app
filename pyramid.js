/*
pyramid.js 1

En vous basant sur l'exemple du cours showStars.js,
écrire un programme pyramid.js qui prend 2 arguments sur la ligne de commande:
-le nombre d'éléments qui sera la base de la pyramide
-une string (un caractère) qui sera le motif à afficher
contrairement à l'exemple du cours qui affiche par défaut le caractère *.
*/

const chalk = require("chalk");

const pyramid = (nbBase, char) => {
  for (let i = 1; i <= nbBase; i += 1) {
    console.log(chalk.green(char.repeat(i)));
  }
};

// Test le bon nombre d'arguments au programme
if (process.argv.length !== 4) {
  console.log(chalk.yellow("usage: node pyramid.js nbBase char"));
  process.exit(1);
}

// Vérifie que le 1er argument passé au programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(chalk.red(`Error: "${process.argv[2]}" is not a number!`));
  process.exit(1);
}

let nbBase = Number(process.argv[2]);
let char = String(process.argv[3]);

pyramid(nbBase, char);

/*

OUTPUT :

TEST 1 :
➜  exo-cmd-app git:(main) ✗ node pyramid.js
usage: node pyramid.js nbBase char (en jaune)

TEST 2 :
➜  exo-cmd-app git:(main) ✗ node pyramid.js u ok
Error: "u" is not a number! (en rouge)

PROGRAMME VALIDE :
➜  exo-cmd-app git:(main) ✗ node pyramid.js 10 ok
ok
okok
okokok
okokokok
okokokokok
okokokokokok
okokokokokokok
okokokokokokokok
okokokokokokokokok
okokokokokokokokokok (en vert)
*/
