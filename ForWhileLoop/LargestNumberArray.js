function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage
const numbers = [10, 5, 20, 8, 15];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:" + largestNumber);