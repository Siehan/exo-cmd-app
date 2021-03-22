/*
sayMyName.js

Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande
une string et affiche un message comme ci-dessous:

% node sayMyName.js Sofiane
My name is Sofiane.
*/

if (process.argv.length != 3) {
  console.log(`usage: node sayMyName.js name`);
  process.exit(1); // exit the program with code status 1
}

const sayMyName = process.argv[2];
console.log(`My name is ${sayMyName}`);

// node sayMyName.js Sylvie
// Ouput : My name is Sylvie
