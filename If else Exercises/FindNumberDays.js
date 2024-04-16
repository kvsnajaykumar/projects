function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Example usage
const month = 2;  // March (0-based index)
const year = 2022;
const daysInMonth = getDaysInMonth(month, year);
console.log(`Number of days in the month: ${daysInMonth}`);