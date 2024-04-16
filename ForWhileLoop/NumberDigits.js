function countDigits(number) {
    // Convert the number to a string to easily count the digits
    const numStr = Math.abs(number).toString();

    // Return the length of the string which represents the number of digits

    return numStr.length;
}

// Test the function with a sample number
const number = 12345;
const numOfDigits = countDigits(number);
console.log(`The number of digits in ${number} is ${numOfDigits}`);