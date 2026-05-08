// ============================================
// JavaScript Naming Conventions - Examples
// ============================================

// 1. camelCase (most popular in JavaScript)
//    - First word lowercase, each next word starts with uppercase
//    - Used for: variables, functions
var firstName = "Alice";
var lastName = "Smith";
var totalAmount = 500;
var isUserLoggedIn = true;
console.log(firstName, lastName, totalAmount, isUserLoggedIn);

// 2. PascalCase (UpperCamelCase)
//    - Every word starts with uppercase
//    - Used for: Classes, Constructors
var UserProfile = "Admin";
var ShoppingCart = "Cart";
var InvoiceNumber = 1001;
console.log(UserProfile, ShoppingCart, InvoiceNumber);

// 3. snake_case
//    - All lowercase, words separated by underscore
//    - Common in Python; sometimes used in JS for constants or DB fields
var first_name = "Charlie";
var last_name = "Brown";
var total_price = 250;
console.log(first_name, last_name, total_price);

// 4. UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE)
//    - All uppercase, words separated by underscore
//    - Used for: constants
var MAX_LIMIT = 100;
var PI_VALUE = 3.14;
var BASE_URL = "https://example.com";
console.log(MAX_LIMIT, PI_VALUE, BASE_URL);

// 5. kebab-case
//    - All lowercase, words separated by hyphen
//    - NOT valid for JS variables (hyphen is minus operator)
//    - Used in: CSS class names, HTML attributes, URLs
// var first-name = "John"; // INVALID in JavaScript
// CSS example: .my-button { } or id="user-profile"

// ---- Summary ----
// camelCase       --> variables, functions        --> userName
// PascalCase      --> classes, constructors       --> UserName
// snake_case      --> DB fields, some constants   --> user_name
// UPPER_SNAKE_CASE--> global constants            --> USER_NAME
// kebab-case      --> CSS/HTML only               --> user-name

// ============================================
// Official References / Style Guides
// ============================================

// 1. MDN Web Docs (Mozilla) - JavaScript Guide
//    https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

// 2. Airbnb JavaScript Style Guide (most widely used in industry)
//    https://github.com/airbnb/javascript
//    - Use camelCase for variables and functions
//    - Use PascalCase for classes and constructors
//    - Use UPPER_SNAKE_CASE for module-level constants

// 3. Google JavaScript Style Guide
//    https://google.github.io/styleguide/jsguide.html
//    - camelCase for variables, parameters, functions, methods
//    - PascalCase for classes and enums
//    - UPPER_SNAKE_CASE for constants

// 4. W3Schools - JavaScript Conventions
//    https://www.w3schools.com/js/js_conventions.asp
//    - camelCase is the standard for variable and function names

// 5. ECMAScript (Official JS Specification)
//    https://tc39.es/ecma262/
//    - The official spec uses camelCase throughout
