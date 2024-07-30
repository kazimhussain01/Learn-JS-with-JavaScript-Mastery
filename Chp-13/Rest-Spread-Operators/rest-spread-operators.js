//! Rest-Spread-Operators

console.log("====Rest-Spread-Operators====")
//! First Example
const add = (a, b) => {
    return a + b;
}

console.log(add(2,2))

//! 2nd Example
console.log("====2nd Example====")
// Rest Operator
const multiply = (...args) => {
    return args.reduce((acc, val) => acc + val);
}

console.log(multiply(2,2,2,2,2,2,2,2))

//! Spread Operator
console.log("====Spread Operator====")
const number = [1,2,3,4,5]
const numbers = [...number, 6]

console.log(number)
console.log(numbers)