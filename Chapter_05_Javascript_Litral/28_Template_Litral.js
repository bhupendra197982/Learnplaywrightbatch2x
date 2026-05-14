
// Template Literal in JavaScript
let firstname= "bhupendra";
let fullname=`my name is ${firstname} kumar`;
console.log(fullname); // my name is bhupendra kumar

let a=10;
let b=20;
console.log(`the sum of ${a} and ${b} is ${a+b}`); // the sum of 10 and 20 is 30


let env = "production";
const apiUrl = `https://api.example.com/${env}/endpoint`;
console.log(apiUrl); // https://api.example.com/production/endpoint

// playwright 
const rowIndex=3;
const columnName="Name";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).textContent();


// logs
const testName = "Playwright Test";
console.log(`Running test: ${testName}`);
const duration = 5;
console.log(`Test completed in ${duration} seconds`);