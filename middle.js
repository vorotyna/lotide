// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === true) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};


// ACTUAL FUNCTION
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

// TEST CODE
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // -> Should pass
assertArraysEqual(eqArrays(middle([1, 2, 3, 6]), [2]), true); // -> Should fail
assertArraysEqual(eqArrays(middle([1]), []), true); // -> Should pass
