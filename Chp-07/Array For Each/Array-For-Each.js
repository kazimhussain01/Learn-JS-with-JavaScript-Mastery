//! Array ForEach Loop

//! 1st Example
console.log("====Array ForEach Loop====")
console.log("===1st Example===")
var names = ['jon', 'Bob', 'John', 'Mark']

// Array forEach

names.forEach((name, i)=> {
    console.log(name, i)
})

//! 2nd Example
console.log("====2nd Example===")
var names = ['jon', 'Bob', 'John', 'Mark']
// Array forEach

const LogTheName = (name, i) => console.log(name, i)

names.forEach(LogTheName)

//! 3rd Example
console.log("====3rd Example====")
var sum = 10
var numbers = [65, 44, 12, 4]

numbers.forEach((number)=> {
    sum += number
})

console.log(sum)