function isNumberInRange(number, min, max) {
    return number >= min && number <= max;
}

const number = 7;
const minRange = 1;
const maxRange = 10;

if(isNumberInRange(number, minRange, maxRange)) {
    console.log(`${number} is within the range ${minRange} - ${maxRange}.`);
}
else {
    console.log(`${number} is outside the range ${minRange} - ${maxRange}. `);

}


