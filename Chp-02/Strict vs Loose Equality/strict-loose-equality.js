//! Strict vs Loose Equality
//* The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible. The === operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).

//! Strict Equality 
// Compare Values and Data Types
// Return true only if both are the same

console.log("Strict Equality")
console.log(5 === "5") // false because the types not same

//! 2nd Example
var a = 10
var b = false
console.log(a === b)

//! 3rd Example
var a = 10
var b = 10
console.log(a === b) // True because the types & Values are same | "a" type is int & "b" type also int

//! 4th Example
var a = "Kazim"
var b = "Hamza"
console.log(a === b) // false because the types same but values are not same

//! 5th Example
var a =  true
var b = false
console.log(a === b)

//! 6th Example
var a =  true
var b = true
console.log(a === b)

//! Loose Equality
console.log("Start Loose Equality")
 
console.log(5 == "5") // true

//! 2nd Example
var a = 10
var b = '10'
console.log(a == b) // true

//! 3rd Example
var a = 10
var b = '11'
console.log(a == b) // false

//! 4th Example
var a = true
var b = 'true'
console.log(a == b) // false 

//! 5th Example
console.log('' == '0') // false
console.log(0 == '') // true because the 0 is equal to empty string
console.log(0 == '0') // true because the type is not compare. compare its value and values are same
console.log(false == 'false') // false 
console.log(false == '0') // true
console.log(true == 1) // true