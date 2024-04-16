function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    }
    else {
        return `${number} is odd.`
    }
}

console.log(checkOddEven(5));
console.log(checkOddEven(10));