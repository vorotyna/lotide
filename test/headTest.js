const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("does not return 5 for [6]", () => {
    assert.notStrictEqual(head([6]), 5);
  });
  it("does not return 5 for []", () => {
    assert.notStrictEqual(head([]), 5);
  });
});
