function occurences(text, character) {
    // let count = 0
    // for (var i = 0; i < text.length; i++) {
    //     if (text.charAt(i) === character) {
    //         count++
    //     }
    // }
    // return count
    return text.split(character).length - 1
}

let occurences2 = (text, character) => text.split(character).length - 1

console.log(occurences("sample text", "e"))
console.log(occurences2("sample text", "e"))

function listToArray(...list) {
    return list;
}

console.log(listToArray(1, 5, 9, 12))
