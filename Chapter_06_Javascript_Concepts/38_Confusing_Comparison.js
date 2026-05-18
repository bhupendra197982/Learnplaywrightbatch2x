// Confusing Comparisons in JavaScript: == vs ===

// ============================================
// == (Loose Equality) - performs type coercion
// === (Strict Equality) - no type coercion
// ============================================

// 1. Number vs String
console.log("--- Number vs String ---");
console.log(5 == "5");      // true  (string "5" converted to number 5)
console.log(5 === "5");     // false (different types: number vs string)
console.log(0 == "0");      // true  (string "0" converted to number 0)
console.log(0 === "0");     // false

// 2. Empty String Comparisons
console.log("\n--- Empty String ---");
console.log(0 == "");       // ⚠️ STRANGE! true  (empty string converted to 0)
console.log(0 === "");      // false
console.log("" == false);   // ⚠️ STRANGE! true  (both convert to 0)
console.log("" === false);  // false

// 3. Boolean Comparisons
console.log("\n--- Boolean ---");
console.log(1 == true);     // true  (true converts to 1)
console.log(1 === true);    // false
console.log(0 == false);    // true  (false converts to 0)
console.log(0 === false);   // false
console.log("1" == true);   // ⚠️ STRANGE! true  (true → 1, "1" → 1)
console.log("1" === true);  // false

// 4. Tricky Boolean String
console.log("\n--- Tricky Boolean String ---");
console.log(false == "false");  // 🔥 IMPORTANT! false ("false" string is NOT converted to boolean false!)
console.log(false == "0");      // ⚠️ STRANGE! true  ("0" → 0, false → 0)
console.log(true == "true");    // 🔥 IMPORTANT! false ("true" string is NOT converted to boolean true!)
console.log(true == "1");       // true  ("1" → 1, true → 1)

// 5. null vs undefined
console.log("\n--- null vs undefined ---");
console.log(null == undefined);   // 🔥 IMPORTANT! true  (special rule in JS - they are loosely equal)
console.log(null === undefined);  // false (different types)
console.log(null == 0);           // ⚠️ STRANGE! false (null ONLY == undefined, not 0!)
console.log(undefined == 0);      // false
console.log(null == false);       // ⚠️ STRANGE! false (null does NOT equal false!)
console.log(undefined == false);  // false

// 6. NaN Comparisons (NaN is not equal to anything, including itself!)
console.log("\n--- NaN ---");
console.log(NaN == NaN);    // 🔥🔥 MOST STRANGE! false (NaN is NOT equal to itself!)
console.log(NaN === NaN);   // 🔥🔥 MOST STRANGE! false (still false with strict equality!)
console.log(Number.isNaN(NaN));  // true (correct way to check for NaN)

// 7. Object Comparisons
console.log("\n--- Objects ---");
console.log({} == {});      // 🔥 IMPORTANT! false (different object references, even if same content)
console.log({} === {});     // false
console.log([] == []);      // 🔥 IMPORTANT! false (different array references)
console.log([] === []);     // false

const obj1 = { a: 1 };
const obj2 = obj1;
console.log(obj1 == obj2);  // true  (same reference)
console.log(obj1 === obj2); // true

// 8. Array Coercion Surprises
console.log("\n--- Array Coercion ---");
console.log([] == false);   // 🔥🔥 VERY STRANGE! true  ([] → "" → 0, false → 0)
console.log([] == 0);       // ⚠️ STRANGE! true  ([] → "" → 0)
console.log([] == "");      // ⚠️ STRANGE! true  ([] → "")
console.log([1] == 1);      // ⚠️ STRANGE! true  ([1] → "1" → 1)
console.log([1,2] == "1,2"); // ⚠️ STRANGE! true ([1,2] → "1,2")

// 9. Whitespace and Special Strings
console.log("\n--- Whitespace ---");
console.log(0 == " ");      // ⚠️ STRANGE! true  (space → 0)
console.log(0 == "\t");     // ⚠️ STRANGE! true  (tab → 0)
console.log(0 == "\n");     // ⚠️ STRANGE! true  (newline → 0)
console.log("  " == false); // ⚠️ STRANGE! true  (spaces → 0, false → 0)

// 10. Negative Zero
console.log("\n--- Negative Zero ---");
console.log(0 == -0);       // true
console.log(0 === -0);      // ⚠️ STRANGE! true  (JavaScript treats 0 and -0 as equal!)
console.log(Object.is(0, -0)); // 🔥 IMPORTANT! false (Object.is can distinguish them)

// ============================================
// 🔥🔥 TOP 5 MOST CONFUSING CASES (Interview Questions!) 🔥🔥
// ============================================
// 1. NaN == NaN        → false  (NaN is not equal to itself!)
// 2. [] == false       → true   (empty array equals false!)
// 3. null == undefined → true   (but null === undefined is false)
// 4. "false" == false  → false  (string "false" is NOT boolean false)
// 5. {} == {}          → false  (two objects are never equal)

// ============================================
// 📝 QUICK INTERVIEW CHEAT SHEET 📝
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  Q: What's the difference between == and === ?              │
├─────────────────────────────────────────────────────────────┤
│  ==  → Loose equality (compares after type conversion)      │
│  === → Strict equality (compares type AND value)            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MEMORIZE THESE (They will ask!)                            │
├─────────────────────────────────────────────────────────────┤
│  typeof null          → "object"     (JS bug!)              │
│  typeof undefined     → "undefined"                         │
│  typeof NaN           → "number"     (strange!)             │
│  typeof []            → "object"                            │
│  typeof {}            → "object"                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FALSY VALUES (6 total - memorize!)                         │
├─────────────────────────────────────────────────────────────┤
│  false, 0, "", null, undefined, NaN                         │
│  Everything else is TRUTHY (including [], {}, "0", "false") │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  QUICK ANSWERS                                              │
├─────────────────────────────────────────────────────────────┤
│  null == undefined    → true                                │
│  null === undefined   → false                               │
│  NaN == NaN           → false (use Number.isNaN())          │
│  [] == []             → false (different references)        │
│  [] == false          → true  (coercion trap!)              │
│  "" == false          → true                                │
│  "0" == false         → true                                │
│  "0" == 0             → true                                │
│  false == "false"     → false                               │
│  1 == "1"             → true                                │
│  1 === "1"            → false                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HOW TO CHECK                                               │
├─────────────────────────────────────────────────────────────┤
│  Check for NaN        → Number.isNaN(value)                 │
│  Check for null       → value === null                      │
│  Check for undefined  → value === undefined                 │
│  Check for both       → value == null                       │
│  Check for array      → Array.isArray(value)                │
│  Exact equality       → Object.is(a, b)                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  INTERVIEW TIP                                              │
├─────────────────────────────────────────────────────────────┤
│  "Always use === unless you have a specific reason to use   │
│   ==. The only valid use of == is checking for null or      │
│   undefined with: if (value == null)"                       │
└─────────────────────────────────────────────────────────────┘
*/

// ============================================
// BEST PRACTICE: Always use === (strict equality)
// to avoid unexpected type coercion bugs!
// ============================================

// Playwright Example: Comparing text content
// const buttonText = await page.locator('button').textContent();
// Use strict equality:
// if (buttonText === "Submit") { ... }
// NOT loose equality:
// if (buttonText == "Submit") { ... }
