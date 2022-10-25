const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects,
};