//! Arrow Function
//* An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage: Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods.

//! 1st Example
const square = (number) => {
    return number * number
}

const result = square(5)
console.log(result)

//! 2nd Example
const square1 = (a, b) => {
    return a + b
}

const result1 = square1 (5, 10)
console.log(result1)

//! 3rd Example
const fullname = (a, b) => a + b
const resultname = fullname("Kazim-", "Hussain")
console.log(resultname)