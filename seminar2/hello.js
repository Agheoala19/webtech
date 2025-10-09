const { join } = require("path")

let sayHello = (name) => {
    return `Hello, ${name}!`
}

console.log(sayHello(process.argv[0]))
console.log(sayHello(process.argv[1]))
console.log(sayHello(process.argv[2]))

let words = ["Hello", " ", "world!"]
let concatenation = (string) => string.join('')

console.log(concatenation(words))
