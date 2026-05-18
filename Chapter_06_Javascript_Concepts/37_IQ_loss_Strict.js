console.log(0 == ""); // true (loose equality, empty string is converted to 0)
console.log(0 === ""); // false (strict equality, different types)
console.log(0 == "0");

console.log("" == "0"); // false (loose equality, both are strings but different values)

console.log(false == "false"); // false (loose equality, false is converted to 0 and "false" is not a number)

console.log(0 == false); // true (loose equality, false is converted to 0
console.log(null == undefined); // true (loose equality, both are considered equal
console.log(null === undefined); // false (strict equality, different types

