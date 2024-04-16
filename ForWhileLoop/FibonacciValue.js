function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function findNthFibonacciValue(N) {
    return fibonacci(N);
}

// Example Usage
const N = 10;
const result = findNthFibonacciValue(N);
console.log(`The ${N}th value in the Fibonacci series is: ${result}`);