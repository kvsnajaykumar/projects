function calculatePower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Example usage

const base = 2;
const exponent = 3;
const result = calculatePower(base, exponent);
console.log(`The result of ${base} raised to the power of ${exponent} is: ${result}`);
