// SNACK 1
const tableName = "Tavolo Vip";
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];

const list = guests.map((guestName, i) => ({
    tableName: tableName, // se sono uguali basta mettere la chiave 'il primo'
    guestName: guestName,
    place: i + 1
}))

console.log(list);
// SNACK 2

const students = [
    { id: 213, name: "Marco della Rovere", grades: 78 },
    { id: 110, name: "Paola Cortellessa", grades: 96 },
    { id: 250, name: "Andrea Mantegna", grades: 48 },
    { id: 145, name: "Gaia Borromini", grades: 74 },
    { id: 196, name: "Luigi Grimaldello", grades: 68 },
    { id: 102, name: "Piero della Francesca", grades: 50 },
    { id: 120, name: "Francesca da Polenta", grades: 84 }
];

console.log(students);

// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
// creare una lista contenente il loro nome tutto in maiuscolo

const upperName = students.map(student => student.name.toUpperCase());
console.log(upperName);

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const over70grades = students.filter(student => student.grades > 70);
console.log(over70grades);

// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const over70and120 = over70grades.filter(student => student.id > 120);
console.log(over70and120);

// SNACK 3

/**
Creare un array di oggetti: -V-
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. -V-
Stampare in console la bici con peso minore utilizzando destructuring e template literal
 */

const bikes = [
    { name: 'Bianchi', weight: 11 },
    { name: 'Atala', weight: 7 },
    { name: 'Olmo', weight: 10 },
    { name: 'Casati', weight: 6 },
    { name: 'Colnago', weight: 8 }
];

bikes.sort(function (a, b) {     // SO' CHE AVRO' UN ARRAY CON AL PRIMO POSTO (INDICE 0) LA BICI PIÙ LEGGERA
    return a.weight - b.weight;
});

console.log(bikes[0]); // STAMPO PER ESSERNE SICURO


let { name, weight } = bikes[0]; // Destructuring
console.log(`La bici più leggera è la ${name} con peso di ${weight} kg `)  // Stampo in console con un template literal






//console.log(`La bicicletta più leggera è la ${name} e pesa ${weight} kg`)

// SNACK 4

/**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */