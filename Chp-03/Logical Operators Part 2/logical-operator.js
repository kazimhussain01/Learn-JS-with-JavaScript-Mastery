//!  Logical Operator
//* A logical operator is a symbol or word used to connect two or more expressions such that the value of the compound expression produced depends only on that of the original expressions and on the meaning of the operator. Common logical operators include AND, OR, and NOT.

//* AND && => ALL OPERANDS ARE TRUE => TRUE
//* OR || => AL LEAST ONE OPERANDS IS TRUE => TRUE
//* NOT ! => TRUE VALUE CONVERT FALSE & FALSE CONVERT TRUE

//! AND Operator &&
console.log("===AND Operator===")
var age = 19
var isCool = true

if (isCool && age > 18){
    console.log("You may enter!") // You may enter!
} else {
    console.log("You cannot enter!") 
}

//! One More Example
console.log(isCool && age > 18) // true

//! One More Example
console.log('truthy' && 1 && 'test' && 999) // output is 999 because the all value is true but 999 is not true and return is 999

//! One More Example
console.log('truthy' && 0 && 'test' && 999) // output is 0


//! OR Operator ||
console.log("===OR Operator===")
var age = 19
var isCool = true

if (isCool || age < 18){
    console.log("You may enter!") // You may enter!
} else {
    console.log("You cannot enter!") 
}

//! One More Example
var age = 19
var isCool = true

if (0 || age < 18){
    console.log("You may enter!") // You may enter!
} else {
    console.log("You cannot enter!") 
}

//! One More Example
console.log('' || 0 || null || undefined) // undefined


//! NOT Operator
console.log("===NOT Operator===")
console.log(!true) // false
console.log(!0) // true
console.log(!!0) // false

//! One More Example
const value = 'test'
if (!!value){
    console.log("This Value is Truthy")
} else {
    console.log("This Value is Falsy")
}

//! One More Example
const value1 = 'test'
if (!value){
    console.log("This Value is Truthy")
} else {
    console.log("This Value is Falsy")
}