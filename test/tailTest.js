const assertEqual = require("../assertEqual");
const tail = require('../tail');

const words = ["Hey there", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);