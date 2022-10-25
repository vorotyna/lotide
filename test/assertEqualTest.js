const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns not equal for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.notStrictEqual('Lighthouse Labs', 'Bootcamp');
  });
  it("returns equal for 1 and 1", () => {
    assert.strictEqual(1, 1);
  });
});