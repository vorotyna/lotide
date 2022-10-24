const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [Hey there, Lighthouse, Labs]", () => {
    const words = ["Hey there", "Lighthouse", "Labs"];
    assert.deepEqual(words.length, 3);
  });
  it("returns 2 for tail([Hey there, Lighthouse, Labs])", () => {
    ;
    const words = ["Hey there", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words).length, 2);
  });
});