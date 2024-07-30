//! Array Reduce Method
console.log("====Array Reduce Method====")

//! 1st Example
var numbers = [24,57,25,78,25,68]

const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(total) // 277

//! 2nd Example
console.log("====2nd Example====")
var number = [1,2,3,4,5]

const sum = number.reduce((acc, val) => {
    return acc + val
}, 0)
//* Another Way
// const sum = number.reduce((acc, val) => acc + val)

console.log(sum) // 115