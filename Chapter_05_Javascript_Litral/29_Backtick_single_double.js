// 29_Backtick_single_double.js
// Difference: Single quote vs Double quote vs Backtick

let name = "Bhupendra";

// Single quote ' ' - simple string, no special features
let single = 'Hello ' + name;
console.log(single); // Hello Bhupendra

// Double quote " " - same as single quote, no difference
let double = "Hello " + name;
console.log(double); // Hello Bhupendra

// Backtick ` ` - can embed variables directly using ${}
let backtick = `Hello ${name}`;
console.log(backtick); // Hello Bhupendra
