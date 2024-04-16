function findProductOfArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "Arrays must have the same length";
    }

    let product = 1;
    for (let i = 0; i < arr1.length; i++) {
        product *= arr1[i] * arr2[i];
    }

    return product;
}

// Test the function
const array1 = [2, 4, 6];
const array2 = [1, 3, 5];
const result = findProductOfArrays(array1, array2);

console.log(result);