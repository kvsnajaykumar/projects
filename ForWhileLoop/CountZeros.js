function countzerosInMatrix(matrix) {
    let count = 0;
    for (let row of matrix) {
        for (let element of row) {
            if(element === 0) {
                count++;
            }
        }
    }
    return count;
}
// Example 2D Matrix
const matrix = [
    [0, 1, 0],
    [2, 0, 3],
    [0, 4, 0]
];

const zeroCount = countzerosInMatrix(matrix);
console.log(`Number of zeros in the matrix: ${zeroCount}`);