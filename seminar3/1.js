//Example

const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) =>
    words.filter((word) => word !== forbiddenWord && word.length >= minLength)

console.log(filterWords(words, forbiddenWord, minLength))

//Exercise

const birthYears = [2005, 1998, 2010, 1985, 2000, 2012];

const currentYear = new Date().getFullYear();

const over18 = birthYears
    .filter((year) => currentYear - year >= 18)

console.log(over18)



