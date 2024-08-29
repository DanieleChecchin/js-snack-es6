// SNACK 1
const total = [
    { tableName: 'Tavolo Vip', guestName: 'Brad Pitt', place: '1' },
    { tableName: 'Tavolo Vip', guestName: 'Johnny Depp', place: '2' },
    { tableName: 'Tavolo Vip', guestName: 'Lady Gaga', place: '3' },
    { tableName: 'Tavolo Vip', guestName: 'Cristiano Ronaldo', place: '4' },
    { tableName: 'Tavolo Vip', guestName: 'Georgina Rodriguez', place: '5' },
    { tableName: 'Tavolo Vip', guestName: 'Chiara Ferragni', place: '6' },
    { tableName: 'Tavolo Vip', guestName: 'George Clooney', place: '7' },
    { tableName: 'Tavolo Vip', guestName: 'Amal Clooney', place: '8' },
    { tableName: 'Tavolo Vip', guestName: 'Fedez', place: '9' },
    { tableName: 'Tavolo Vip', guestName: 'Amadeus', place: '10' },
    { tableName: 'Tavolo Vip', guestName: 'Fiorello', place: '11' }
]
console.log(total);


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

const over70and120 = students.filter(student => student.grades > 70 && student.id > 120);
console.log(over70and120);