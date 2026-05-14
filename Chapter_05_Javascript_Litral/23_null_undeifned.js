// 23_null_undeifned.js
// Simple difference: null vs undefined in JavaScript

/*
undefined:
- JavaScript gives this value automatically
- Means: value is not assigned yet

null:
- You set this value yourself
- Means: intentionally empty (no value)
*/

let a;
console.log("a =", a); // undefined

let b = null;
console.log("b =", b); // null

console.log("type of undefined:", typeof undefined); // "undefined"
console.log("type of null:", typeof null); // "object" (this is a known JS behavior)

// Loose equality (==) treats null and undefined as equal
console.log("null == undefined:", null == undefined); // true

// Strict equality (===) checks type too
console.log("null === undefined:", null === undefined); // false

// Practical use
let userMiddleName; // not assigned yet -> undefined
let userNickname = null; // intentionally no nickname -> null

console.log("userMiddleName:", userMiddleName);
console.log("userNickname:", userNickname);
