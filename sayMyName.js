/*
sayMyName.js

Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande
une string et affiche un message comme ci-dessous:

% node sayMyName.js Sofiane
My name is Sofiane.
*/

const sayMyName = process.argv[2];
console.log(`My name is ${sayMyName}`);
// node sayMyName.js Sylvie
// Ouput : My name is Sylvie
