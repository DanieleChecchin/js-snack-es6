/**
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const people = [
    {
        firstName: "Mario",
        lastName: "Rossi",
        age: 30
    },
    {
        firstName: "Luca",
        lastName: "Bianchi",
        age: 17
    },
    {
        firstName: "Giulia",
        lastName: "Verdi",
        age: 28
    },
    {
        firstName: "Sara",
        lastName: "Neri",
        age: 15
    }
];


const result = people.map((person) =>
    `${person.firstName} ${person.lastName} ${(person.age > 18) ? 'può guidare' : 'non può guidare'} perchè ha ${person.age} anni`
);

console.log(people);
console.log(result);


