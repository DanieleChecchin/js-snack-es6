/**
 * Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
 */

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'coccodrillo del nilo', famiglia: 'crocodilidi', classe: 'rettili' },
    { nome: 'elefante Africano', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'rana Freccia', famiglia: 'dendrobatidi', classe: 'anfibi' },
    { nome: 'orca', famiglia: 'delphinidae', classe: 'mammiferi' }
]

const mammals = animals.filter(animal => animal.classe === 'mammiferi');
console.log(mammals);