//! Null & Undefined

//* Null Example

let age = null;
console.log(age) // null

// Null Example 2

let age1 = null

//* change the value

age1 = 20
console.log(age1)  // 20

// Null Example with if, else Statement
let my_variable = null

// Checking if the variable is null
if (my_variable == null){
    console.log("The variable is null") // The variable is null
} else {
    console.log("The variable is not null")
}

// Null Example 2 with if, else Statement
let my_variable1 = "kazim"

// Checking if the variable is null
if (my_variable1 == null){
    console.log("The variable is null")
} else {
    console.log("The variable is not null") // The variable is not null
}

//! TypeOf

let age2 = null;
// This is actually a long-standing bug in JavaScript that exists for historical reasons, and it has been preserved for backward compatibility.
console.log(typeof age2) // Object


//! Undefined
let x;
console.log(x) // undefined


// 2nd Example
function my_function(param){
    console.log(param) // undefined
}

my_function()

// 3rd Example 
let someVariable = undefined;
if (someVariable ==  undefined){
    console.log("This variable is Undefined") // This variable is Undefined
} else {
    console.log("This variable is defined")
}

// 4th Example 
let y = undefined;
if (y ==  "kazim"){
    console.log("This variable is Undefined")
} else {
    console.log("This variable is defined") // This variable is defined
}

//! Typeof
let m;
console.log(typeof m) // undefined