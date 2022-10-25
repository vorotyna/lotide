const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const expected = true;
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });
});



