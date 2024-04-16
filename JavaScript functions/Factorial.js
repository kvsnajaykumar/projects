function getFactorial(num) {
    if(num==1) {
        return 1;
    }
    if(num==0 || num<0) {
        return 0;
    }
    return num*getFactorial(num-1)
}

console.log(getFactorial(5))
console.log(getFactorial(12))