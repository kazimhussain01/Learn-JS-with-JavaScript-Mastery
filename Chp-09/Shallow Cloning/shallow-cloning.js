//! Shallow Cloning
 
// - Shallow Arrays
// - 1st way: Spread Operator

//! First Example
console.log("====First Example====")
var numbers = [1,2,3,4,5,6]
console.log(... numbers)

//! 2nd Example
console.log("====2nd Example====")

var numbers = [1,2,3,4,5,6]
var copiedNumbers = numbers
var newNumbers = [... numbers]

numbers.push(7)

console.log(numbers)
console.log(copiedNumbers)
console.log(newNumbers)

// - 2nd way with Slice method: Arrays.slice()
console.log("====2nd way Arrays.slice()=====")
var numbers = [1,2,3,4,5,6]
var copiedNumbers = numbers
var newNumbers = numbers.slice()

numbers.push(7)

console.log(numbers)
console.log(copiedNumbers)
console.log(newNumbers)

//! 3rd Example
console.log("====3rd Example====")

const person = {firstName: "Kazim", age: 22}
const otherPerson = {... person}

person.age = 20

console.log(person)
console.log(otherPerson)