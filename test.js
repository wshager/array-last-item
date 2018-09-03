require("./index.js");

const assert = require('assert');

const a = [1,2,3];

assert.strictEqual(a.lastItem,3);

a.lastItem = 4;

assert.deepStrictEqual(a,[1,2,4]);

console.log("Success")
