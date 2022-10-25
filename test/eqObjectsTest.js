const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { a: 1, b: 2 } and { b: 2, a: 1 }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const expected = true;
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false for { a: 1, b: 2 } and { a: 1, b: 2, c: 3 }", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const expected = false;
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("returns false for { a: 1, b: 2 } and { c: 1, a: 1 }", () => {
    const ab = { a: "1", b: "2" };
    const bb = { c: "1", a: "1" };
    const expected = false;
    assert.strictEqual(eqObjects(ab, bb), false);
  });
  it("returns false for { c: 2, a: 1 } and { c: 1, a: 1 }", () => {
    const cc = { c: "2", a: "1" };
    const bb = { c: "1", a: "1" };
    const expected = false;
    assert.strictEqual(eqObjects(cc, bb), false);
  });
  it("returns true for { c: 1, d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const expected = true;
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for { c: 1, d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const expected = false;
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});