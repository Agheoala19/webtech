const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
    const words = text.split(' ')
    const result = {}
    for (let word of words) {
        if (word in result) {
            result[word]++
        } else {
            result[word] = 1
        }

    }
    for (let word in result) {
        result[word] /= words.length
    }
    return result
}

console.log(getCounts(sampleString))

const frequencies = (text) => {
    const letters = text.replace(/\s+/g, '').toLowerCase();

    const frequencies = {};

    for (const letter of letters) {
        if (/[a-zăâîșț]/.test(letter)) {
            frequencies[letter] = (frequencies[letter] || 0) + 1;
        }
    }

    const total = letters.length;
    for (const letter in frequencies) {
        frequencies[letter] = frequencies[letter] / total;
    }

    return frequencies;
}

const text = "Ana are mere";
const result = frequencies(text);
console.log(result);
