// SNACK 4

/**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// FUNZIONE per generare un numero random per i punti fatti ed i falli subiti

const getRandomNumber = () => {
    const max = 30;
    return Math.floor(Math.random() * max) + 1;
}

// Creo un array di squadre di calcio

const teams = [
    { name: 'JUVENTUS', points: 0, foulSuffered: 0 },
    { name: 'Roma', points: 0, foulSuffered: 0 },
    { name: 'Parma', points: 0, foulSuffered: 0 },
    { name: 'Inter', points: 0, foulSuffered: 0 },
    { name: 'Milan', points: 0, foulSuffered: 0 },
    { name: 'Napoli', points: 0, foulSuffered: 0 }
]

// Inserisco i numeri random al posto dei punti e dei falli
teams.forEach(team => {
    team.points = getRandomNumber();
    team.foulSuffered = getRandomNumber();
});

let { name, foulSuffered } = teams; // Destructuring

console.log(teams) // Stampo in console