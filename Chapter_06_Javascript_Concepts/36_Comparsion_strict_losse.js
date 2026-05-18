console.log(42 == "42"); // true (loose equality)
console.log(42 === "42"); // false (strict equality) data type and converted value both should be same

console.log(42 =="45"); // false

// console.log(5 = 5); // true (assignment operator, not comparison)
//console.log(5 = "5"); // true (assignment operator, not comparison)

console.log(0 == ""); // true (loose equality, empty string is converted to 0)
console.log(0 === ""); // false (strict equality, different types)

console.log(null == undefined); // true (loose equality, both are considered equal)

console.log(true == 1); // true (loose equality, true is converted to 1)
console.log(true === 1); // false (strict equality, different types)

console.log(false == 0); // true (loose equality, false is converted to 0)
console.log(true === "1"); // false (strict equality, different types)
