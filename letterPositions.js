// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

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

// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

// TEST
assertArraysEqual(letterPositions("hello").e, [1]);