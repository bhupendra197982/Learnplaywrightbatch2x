let rajkumar_age = 18;
let rk_will_go_to_goa = rajkumar_age >= 18 ? "RJ will go to goa" : "RJ will not go to goa"   ; 
console.log(rk_will_go_to_goa); // "RJ will go to goa"


let age = 17;
age +=10;
// age =-10; 

let actaualStatusCode =200;
let expectedStatusCode =200;
let status = actaualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(status); // "Test Passed"

let environment = "production";
let baseUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(baseUrl); // "https://api.production.com"

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in", browserMode, "mode"); // "Launching browser in headless mode"

let responseTime = 850; // in milliseconds
let sla = 1000; // in milliseconds
let slastatus = responseTime <= sla ? "SLA Met" : "SLA Not Met";
console.log(slastatus); // "SLA Met"

let condition = true;
let isSKmale = condition ? true : false;
console.log(isSKmale); // "Condition is true"

let age_verma = 26;
let is_verma_goa = age_verma > 26 ? "yes he will go to goa" : "no he will not go to goa";
console.log(is_verma_goa); // "no he will not go to goa"

let age_bhupendra = 45;
let is_bhupendra_drink = age_bhupendra > 18 ? (age_bhupendra>26 ?  "bhupendra will drink" : "no drink" ) : "no he will not goto goa";
console.log(is_bhupendra_drink); // "yes he will drink"


///--------- IQ -----

let statusCode = 400;
let category = 
    statusCode < 300 ? "success" :
    statusCode < 400 ? "redirection" :
    statusCode < 500 ? "client error" :
    statusCode < 600 ? "server error" :
    "unknown status code";
console.log(category); // "client error"

let temp =35;
let feel = (temp >=40) ? "Veryhot" : (temp >=30) ? "Hot" : (temp >=30) ? "Hot" : (temp >=10) ? "Cool" : "Cold";
console.log(feel); // "Hot"

