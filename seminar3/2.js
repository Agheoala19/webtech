//Example

const squareDimensions = [3, 5, 12, 3, 5, 3]

const getTotalArea = (squareDimensions) => squareDimensions.map((value) => value * value).reduce((prev, current) => prev + current, 0)

const result = getTotalArea(squareDimensions)
console.log("result: ", result)

//Exercise

const numbers = [12, 2, 15, 27, 40, 133, 210]
const myNumber = 2

const returnSum = (array, number) => numbers.filter((value) => value % number == 0).reduce((prev, current) => prev + current, 0)

const sum = returnSum(numbers, myNumber)

console.log("The sum is: ", sum)
