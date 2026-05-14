// 26_Literal_Number_all.js
// All number types supported in JavaScript

/*
JavaScript supports different types of numbers:
1. Integer (whole numbers)
2. Float/Decimal (numbers with decimals)
3. Scientific notation
4. BigInt (very large numbers)
5. Infinity
6. NaN (Not a Number)
7. Negative numbers
8. Different bases (binary, octal, hexadecimal)
*/

// 1. Integer (whole numbers)
let wholeNumber = 42;
console.log("Integer:", wholeNumber, typeof wholeNumber); // 42, "number"

// 2. Float/Decimal (numbers with decimals)
let decimalNumber = 3.14;
console.log("Decimal:", decimalNumber, typeof decimalNumber); // 3.14, "number"

// 3. Scientific notation (large numbers)
let scientificNumber = 1.5e3; // 1500
console.log("Scientific notation (1.5e3):", scientificNumber); // 1500

let smallScientific = 2.5e-2; // 0.025
console.log("Scientific notation (2.5e-2):", smallScientific); // 0.025

// 4. BigInt (very large numbers beyond Number limit)
let bigNumber = 123456789012345678901234567890n; // note the 'n' at the end
console.log("BigInt:", bigNumber, typeof bigNumber); // "bigint"

let bigInt2 = BigInt(9999999999999999);
console.log("BigInt using BigInt():", bigInt2);

// 5. Negative numbers
let negativeInt = -50;
let negativeDecimal = -3.14;
console.log("Negative:", negativeInt, negativeDecimal);

// 6. Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log("Positive Infinity:", positiveInfinity);
console.log("Negative Infinity:", negativeInfinity);

// Also from division
let divByZero = 10 / 0;
console.log("10 / 0 =", divByZero); // Infinity

// 7. NaN (Not a Number)
let notANumber = NaN;
console.log("NaN:", notANumber, typeof notANumber); // NaN, "number"

// NaN from invalid operations
let invalidOperation = "Hello" - 5;
console.log("Invalid operation 'Hello' - 5 =", invalidOperation); // NaN

let sqrtNegative = Math.sqrt(-1);
console.log("Math.sqrt(-1) =", sqrtNegative); // NaN

// 8. Different bases
// Binary (base 2) - prefix: 0b
let binaryNumber = 0b1010; // = 10 in decimal
console.log("Binary 0b1010 =", binaryNumber); // 10

// Octal (base 8) - prefix: 0o
let octalNumber = 0o12; // = 10 in decimal
console.log("Octal 0o12 =", octalNumber); // 10

// Hexadecimal (base 16) - prefix: 0x
let hexNumber = 0xA; // = 10 in decimal
console.log("Hexadecimal 0xA =", hexNumber); // 10

// Special cases
console.log("\n--- Special Cases ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 (floating point precision)
console.log("typeof NaN:", typeof NaN); // "number" (confusing but true)
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true

// Check number range
console.log("\n--- Number Range ---");
console.log("Maximum number:", Number.MAX_VALUE);
console.log("Minimum number:", Number.MIN_VALUE);
console.log("Maximum safe integer:", Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log("Minimum safe integer:", Number.MIN_SAFE_INTEGER); // -(2^53 - 1)
