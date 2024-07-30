//! If Statement
//* “If” statements: where if a condition is true it is used to specify execution for a block of code.

//! Else Statement
//* “Else” statements: where if the same condition is false it specifies the execution for a block of code.

//! If Statement
console.log("If Statement")
var age = 18;
if (age > 18) {
    console.log("You may enter!")
} 

//! One more Example
var age = 18;
if (age < 20) {
    console.log("Hello, Kazim Hussain")
}

//! One More Example
var age = 18
if (age === 18) {
    console.log("You'r Condition is true")
}

//! Else Statement
console.log("Else Statement")
var age = 18
if (age > 18) {
    console.log("If condition is not true")
} else {
    console.log("Else condition is true")
}

//! One More Example
var name = "Kazim"
if ("kazim" === "Kazim") {
    console.log("If condition is not true")
} else {
    console.log("Else condition is true")
}

//! Else If Condition
console.log("If Else Statement")
var age = 18
if (age > 18) {
    console.log("You'r Statement is not true")
} else if (age < 18) {
    console.log("You'r else if Statement is also not true")
} else if (age === 18) {
    console.log("You'r else Statement is true")
}

//! One More Example 
var name = "Pakistan"
if ("Pakistan" === "Pakistan") {
    console.log("You'r If Statement is true")
} else if ("name" === "Pakistan") {
    console.log("You'r Else If Statement is not true")
} else if ("Hussain" === "Pakistan") {
    console.log("You'r Else If Statement is also not true")
} else {
    console.log("You'r Else Statement is not true")
}

//! One More Example
var height = 7
if (height > 8) {
    console.log("You'r If Statement is not true")
} else if (height === 7) {
    console.log("You'r Else If Statement is true")
} else {
    console.log("You'r Else Statement is not true")
}