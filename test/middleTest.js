const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // -> Should pass
assertArraysEqual(eqArrays(middle([1, 2, 3, 6]), [2]), true); // -> Should fail
assertArraysEqual(eqArrays(middle([1]), []), true); // -> Should pass