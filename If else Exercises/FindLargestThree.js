function findLargestNumber(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
}

// Test the function
const num1 = 10;
const num2 = 20;
const num3 = 15;

const largestNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number is: ${largestNumber}`);