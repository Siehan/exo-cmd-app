/*
pyramid.js - 1

En vous basant sur l'exemple du cours showStars.js,
écrire un programme pyramid.js qui prend 2 arguments sur la ligne de commande:

-le nombre d'éléments qui sera la base de la pyramide
-une string (un caractère) qui sera le motif à afficher
contrairement à l'exemple du cours qui affiche par défaut le caractère *.
*/

const chalk = require("chalk");

const pyramid = (nbBase, char) => {
  for (let i = 1; i <= nbBase; i += 1) {
    console.log(chalk.blue(char.repeat(i)));
  }
};

pyramid(8, "i");

// Vérifier qu'il y a bien les deux arguments passés à notre programme
if (process.argv.length !== 3) {
  console.log(chalk.blue("usage: node pyramid.js number"));
  process.exit(1);
}
// Vérifier que le 1er argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`));
  process.exit(1);
}
// Vérifier que le 2ème argument passé à notre programme peut être converti en string
if (isString(process.argv[3])) {
  console.log(chalk.red(`Error: ${process.argv[3]} is not a string.`));
  process.exit(1);
}

// C'est bon, le 1er argument est bien un nombre et le 2ème une string
let nb = Number(process.argv[2]);
let st = String(process.argv[3]);

pyramid(nb, st); // variable dans la ligne de commande

/*
pyramid.js - 2
Améliorer le programme pyramid.js précédent en ajoutant un paramètre optionnel
sur la ligne de commande qui devra arriver à la fin de la ligne de la commande:
-r Si ce paramètre est présent la pyramide devra être affichée à l'envers.

node pyramid.js 5 A -r
AAAAA
AAAA
AAA
AA
A
*/

/*
const chalk = require("chalk");
const readlineSync = require("readline-sync");

const pyramid = (nbBase, char, reverse) => {
  if (reverse) {
    for (let i = 1; i <= nbBase; i += 1) {
      console.log(chalk.green(char.repeat(i)));
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(chalk.red(char.repeat(i)));
    }
  }
};

pyramid(13, "g", false);

*/
