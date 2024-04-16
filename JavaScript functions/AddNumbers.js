function addNumbers(...args) {
    return args.reduce((total,num) => total+num);
}

console.log(addNumbers(2,4,5));
console.log(addNumbers(10,45,34,130));