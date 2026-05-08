// ============================================
// JavaScript Identifier Rules - Examples
// ============================================

// Rule 1: Can contain letters, digits, _ and $
var myVariable = "letters only";
var user1 = "with digit";
var _count = "underscore";
var $price = "dollar sign";
console.log(myVariable, user1, _count, $price);

// Rule 2: Must START with a letter, _ or $ (NOT a digit)
var name1 = "valid - starts with letter";
var _name = "valid - starts with underscore";
var $name = "valid - starts with dollar";
// var 1name = "INVALID - starts with digit"; // This would cause error
console.log(name1, _name, $name);

// Rule 3: Case-sensitive (name, Name, NAME are different)
var city = "new york";
var City = "London";
var CITY = "PARIS";
console.log(city);   // new york
console.log(City);   // London
console.log(CITY);   // PARIS

// Rule 4: Cannot use reserved keywords
// var var = 10;    // INVALID - 'var' is a keyword
// var let = 5;     // INVALID - 'let' is a keyword
// var if = true;   // INVALID - 'if' is a keyword
var myVar = 10;     // VALID - not a keyword
var letValue = 5;   // VALID - not exactly a keyword
console.log(myVar, letValue);

// Rule 5: No spaces allowed
var firstName = "John";    // VALID - no space (camelCase)
var last_name = "Doe";     // VALID - underscore instead of space
// var first name = "John"; // INVALID - space not allowed
console.log(firstName, last_name);

// Rule 6: Unicode characters allowed (but not recommended)
// var café = "coffee shop";    // valid unicode but not recommended
// var résumé = "document";     // valid unicode but not recommended
var coffeShop = "coffee shop";  // RECOMMENDED - use plain ASCII instead
var resumeDoc = "document";
console.log(coffeShop, resumeDoc);

