//Example

const sampleArray = [1, 2, 3, 4, 5]

const map = (array, transformation) => {
    const result = []
    for (const element of array) {
        result.push(transformation(element))
    }
    return result
}

console.log(map(sampleArray, (x) => x * 2))

//Exercise

const numbers = [1, 2, 3, 4, 5]

const reduceLeft = (array, reducer, initialValue) => {
    let accumulator = initialValue
    let startIndex = 0

    if (accumulator === undefined) {
        accumulator = array[0]
        startIndex = 1
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i])
    }

    return accumulator
}

console.log(reduceLeft(numbers, (acc, x) => acc + x, 0))
