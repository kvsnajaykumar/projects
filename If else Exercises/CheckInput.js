function checkIfNumber(input) {
    if(typeof input === 'number' && !isNaN(input)) {
        return true;
    } else {
        return false;
    }
}

let userInput = 42;
if(checkIfNumber(userInput)) {
    console.log('Input is a number');
}
else {
    console.log('Input is not a number.');
}