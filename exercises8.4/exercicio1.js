
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

const funcaoAcumula = (acc, curr) => acc.concat(curr);

const flatten = arrays.reduce(funcaoAcumula, []);

console.log(flatten);

assert.deepStrictEqual(flatten, ['1', '2', '3', true, 4, 5, 6]);

// Decicidi usar a função concat porque vi no video da explicação do gabarito.