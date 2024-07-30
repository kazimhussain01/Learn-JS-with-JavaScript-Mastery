//! Hoisting in Javascript
//! 1st Example
console.log("===Hoisting in Javascript===")
console.log(age)

var age = 20; // is called a hoisting in Javascript

//! 2nd Example
var hoist;

console.log(hoist)

hoist = "The Variable has been hoisted"

//! 3rd Example
// function hoist() {
//     var message;

//     console.log(message)

//     message = 'test'
// }
 
// hoist() // Through TypeError: hoist is not a function