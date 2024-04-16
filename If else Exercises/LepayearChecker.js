function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const yearToCheck = 2024;
console.log(`${yearToCheck} is a leap year: ${isLeapYear(yearToCheck)}`)