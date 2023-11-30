const wordList = require("./words");

function getRandomWords(count) {
    const wordArray = Array.from(wordList);

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    // Get the first {count} elements from the shuffled array
    return wordArray.slice(0, count);
}

module.exports = {getRandomWords}