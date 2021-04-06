
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const numeroDeA = (acc, curr, index) => {
 if (curr[index] === 'a'){
    return acc + 1;
 } 
}
const containsA = names.reduce(numeroDeA, 0);

console.log(containsA);

// assert.deepStrictEqual(containsA(), 20);