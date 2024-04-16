function fibonacciSeries(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

const n = 10;
const fibonacciNumbers = fibonacciSeries(n);
console.log(`Fibonacci Series up to ${n}:`, fibonacciNumbers.join(', '));