// ?

console.log(null >=0); // null == 0 or null > 0
console.log(null ===0); // null is not equal to 0

// ?? Nullish coalescing operator
let amul = null;
let result = amul ?? "Amul is not available buy nandani"; // if amul is null or undefined, use the default value
console.log(result); // "Amul is not available buy nandani"

