//Example

const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

const sampleText = `
    best
    read
    on
    windy
    nights
`
const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('')

    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))

//Exercise

const hashWords = (string, dictionary) => {
    let modified = string.split('')
    for (const word of dictionary)
        if (string.indexOf(word) !== -1) {
            for (let j = string.indexOf(word) + 1; j < string.indexOf(word) + word.length - 1; j++) {
                modified[j] = '*'
            }
        }
    return modified.join('')
}

console.log(hashWords('javascript este minunat', ['este', 'minunat']))
