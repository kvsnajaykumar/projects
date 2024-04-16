function countLetters(word) {
    const letterCount = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if(/[a-z]/.test(letter)) {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
    }

    return letterCount;
}

const word = "Hello";
const result = countLetters(word);
console.log(result);