function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
}

console.log(genRandom(1, 10))
console.log(genRandom(80,90))