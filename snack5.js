/*ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo
e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/

const firstArray = ['pippo', 'pluto', 'paperino'];

const secondArray = firstArray.map(element => element.charAt(0).toUpperCase() + element.slice(1));

console.log(secondArray);