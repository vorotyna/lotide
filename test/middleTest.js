const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3] & [2]", () => {
    const arrOne = [1, 2, 3];
    const arrTwo = [2];
    const expected = [2];
    assert.deepEqual(middle(arrOne, arrTwo), expected);
  });
  it("returns true for [] is middle of [1] (when there is one number in array)", () => {
    const arrOne = [1];
    const arrTwo = [];
    const expected = [];
    assert.deepEqual(middle(arrOne, arrTwo), expected);
  });
});