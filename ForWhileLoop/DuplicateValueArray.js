function findDuplicates(arr) {
    let duplicates = [];
    let uniqueValues = {};


arr.forEach(function(value) {
    if(uniqueValues[value]) {
        if(uniqueValues[value] === 1) {
            duplicates.push(value);
        }
        uniqueValues[value]++;
    } else {
        uniqueValues[value] = 1;
    }
});

return duplicates;

}

const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8 ,9, 1];
const duplicateValues = findDuplicates(myArray);

console.log('Duplicate values in the array:', duplicateValues);