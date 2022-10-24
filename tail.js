const assertEqual = require('./assertEqual');

function tail(actual, expected) {
  return actual.slice(1);
};

module.exports = tail;