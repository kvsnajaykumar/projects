function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
}

// Example usage

const originalArray = [1, 2, 3, 4, 2, 5, 2];
const elementToRemove = 2;
const modifiedArray = removeElementFromArray(originalArray, elementToRemove);
console.log(modifiedArray);