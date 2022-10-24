const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let revisedArr = [];
  let index = Math.round((arr.length) / 2);
  if (arr.length === 1 || arr.length === 2) {
    return revisedArr;
  } if (arr.length % 2 === 0) {
    revisedArr.push(arr[index - 1], arr[index]);
    return revisedArr;
  } else {
    revisedArr.push(arr[index - 1]);
    return revisedArr;
  }
};

module.exports = middle;