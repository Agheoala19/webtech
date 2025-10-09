function addToArray(array, ...args) {
    // let args = arguments //nr. variabil de parametrii
    // let array = args[0]
    for (var i = 1; i < args.length; i++) {
        array.push(args[i])
    }
    return array
}

let array = ["a"]

console.log(addToArray(array, "b", "c").join(", "))

function interArrays() {
    let args = arguments
    arr1 = args[0]
    arr2 = args[1]

    if (arr1.length != arr2.length) {
        return -1
    }

    const finalArray = []
    for (let i = 0; i < arr1.length; i++) {
        finalArray.push(arr1[i], arr2[i])
    }
    return finalArray
}

console.log(interArrays("ana", "ion").join(''))
