function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

function noOfDifferentCharacters(str1, str2) {
    if (str1.length !== str2.length) {
        return -1
    }

    let differentCharacters = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            differentCharacters++
        }
    }

    return differentCharacters
}

console.log(noOfDifferentCharacters("mama", "tata"))
