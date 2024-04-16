function generateFibonacciSeries(n) {
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < n ; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    return fibonacciSeries;
}

const n =  10;
const fibonacciSeries = generateFibonacciSeries(n);
console.log(fibonacciSeries);