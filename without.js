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

const without = function(source, itemsToRemove) {
  let newList = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newList.push(source[i]);
    }
  }
  return newList;
};

//Test Cases:
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // -> Should pass
assertArraysEqual(eqArrays(without([1, 2, 3, 6], [1]), [2, 3]), true); // -> Should fail