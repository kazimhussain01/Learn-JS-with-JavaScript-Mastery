//! Ternary Operator

//* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

//! Simple If Else Statement
console.log('===In Simple If Else Statement===')
var age = 18
if (age > 18){
    console.log('You can drive it')
} else {
    console.log('You can not drive yet')
}

//! Same Statement in Ternary Operator
// Syntax -> condition ? true : else

console.log('===In Ternary Operator===')
age > 18 ? console.log('You can drive it') : console.log('You can not drive yet')

//! One More Example
const variable_name = 'Kazim'

variable_name == 'Kazim' ? console.log("You'r answer is correct") : console.log("You'r answer is not correct")