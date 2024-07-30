//! Truthy & Falsy Value
//* Values that are coerced into true are called truthy and values that are coerced into false are called falsy.

//! Truthy Values
// true
// 1
// "hello"
// 63
// {}
// []

//! Truthy 
if (1){
    console.log("IN HERE!") // IN HERE!
} else {
    console.log("NO, IN HERE!")
}

//! 2nd Example
if ("test"){
    console.log("IN HERE!") // IN HERE
} else {
    console.log("NO, IN HERE!")
}

//! 3rd Example
if ([]){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}

//! 4th Example
if ({}){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}

//! Falsy Values
// false
// 0
// ''
// null
// undefined
// NaN

//! Falsy 
if (0){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}

//! 2nd Example
if (null){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}

//! 3rd Example
if (undefined){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}

//! 4th Example
if (''){
    console.log("IN HERE!")
} else {
    console.log("NO, IN HERE!") // NO, IN HERE
}