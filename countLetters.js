// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(string) {
  let count = {};
  let newString = string.replace(/\s/g, '');
  for (let i = 0; i < newString.length; i++) {
    let letter = newString[i];
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  return count;
};

// TEST
let string = "hello";
assertEqual((JSON.stringify(countLetters(string))), JSON.stringify({ h: 1, e: 1, l: 2, o: 1 })); // Should PASS


