// Define the number of rows in the pattern
const rows = 5;

// Outer loop for the number of rows
for (let i = 1; i <= rows; i++) {
    let pattern  = '';

    // Inner loop for each row's pattern
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    // Print the pattern for the current row
    console.log(pattern)
}