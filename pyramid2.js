/*
pyramid.js 2

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

const chalk = require("chalk");

const pyramid2 = (nbBase, char, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; i += 1) {
      console.log(chalk.green(char.repeat(i)));
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(chalk.blue(char.repeat(i)));
    }
  }
};

// Test le bon nombre d'arguments au programme
if (process.argv.length < 4 || process.argv.length > 5) {
  console.log(chalk.green("usage: node pyramid2.js nbBase char reverse"));
  process.exit(1);
}

// Test le cinquième argument en optionnel
if (process.argv.length === 5 && process.argv[4] !== "-r") {
  console.log(chalk.yellow("The fifth argument is wrong"));
  process.exit(1);
}

// Vérifie que le 1er argument passé au programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(chalk.red(`Error: "${process.argv[2]}" is not a number!`));
  process.exit(1);
}

let nbBase = Number(process.argv[2]);
let char = String(process.argv[3]);
let isReverse = process.argv.length === 5 ? true : false;

pyramid2(nbBase, char, isReverse);

/*

OUTPUT :

PROGRAMME VALIDE :
➜  exo-cmd-app git:(main) ✗ node pyramid2.js 10 ok
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

PROGRAMME VALIDE  :

➜  exo-cmd-app git:(main) ✗ node pyramid2.js 10 r -r
rrrrrrrrrr
rrrrrrrrr
rrrrrrrr
rrrrrrr
rrrrrr
rrrrr
rrrr
rrr
rr
r (en bleu)

TEST 1 :
➜  exo-cmd-app git:(main) ✗ node pyramid2.js 10 r -d
The fifth argument is wrong

TEST 2 :

➜  exo-cmd-app git:(main) ✗ node pyramid2.js i ok
Error: "i" is not a number! (en rouge)

*/
