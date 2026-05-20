function isLeapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

    return true;

  } else {

    return false;

  }

}

let years = [1900, 2000, 2021, 2024, 2100];

years.forEach(y => {

  console.log(y + (isLeapYear(y) ? " is a leap year." : " is not a leap year."));

});


// Leap Year Check

Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}
