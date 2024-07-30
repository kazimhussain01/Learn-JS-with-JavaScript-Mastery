//!  Logical Operator
//* A logical operator is a symbol or word used to connect two or more expressions such that the value of the compound expression produced depends only on that of the original expressions and on the meaning of the operator. Common logical operators include AND, OR, and NOT.

//* AND && => ALL OPERANDS ARE TRUE => TRUE
//* OR || => AL LEAST ONE OPERANDS IS TRUE => TRUE
//* NOT ! => TRUE VALUE CONVERT FALSE & FALSE CONVERT TRUE

//! And Operator &&
console.log("And Operator")
console.log(true && false) // false because the all operands are not true one is false.

//! 2nd Example
var a = true
var b = true
console.log(b && a) // true because all the operands are true.

//! 3rd Example
var a = true
var b = true
var c = false
console.log(b && a && c)

//! OR Operator
console.log("OR Operator")
console.log(true || false) // true because the one operand is true

//! 2nd Example
var a = false 
var b = true
console.log(a || b) // true

//! 3rd Example
var a = false 
var b = false
console.log(a || b) // false

//! 4th Example
var a = false 
var b = false
var c = true
console.log(a || b || c) // true

//! NOT Operator !
console.log("NOT Operator")
console.log(!true) // false because the not operator convert operator true is false & false is true

//! 2nd Example
var a = false
console.log(!a)

//! 3rd Example
var a = true
var b = false
console.log(!a && !b) // false