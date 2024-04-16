function reverseNum(num) {
    var reverse = 0;
    while(num != 0) {
        reverse = reverse * 10;
        reverse = reverse + num%10;
        num = Math.trunc(num/10);
    }
    return reverse;
}

console.log(reverseNum(123));
console.log(reverseNum(5872));