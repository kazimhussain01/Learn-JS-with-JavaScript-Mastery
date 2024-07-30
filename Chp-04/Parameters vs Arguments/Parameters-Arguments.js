// Parameters - used when defining a function
// Arguments - used when making a function

//! 1st Example
var SayHi = (name, age) => {
    console.log(`${name} is ${age} year old`);
}

SayHi('Joe', 25) // Joe is 25 year old

//! 2nd Example
var SayHi = (name, age) => {
    console.log(`${name} is ${age} year old`);
}

SayHi('Joe') // Joe is undefined year old. Because the age is not defined

//! 3rd Example
var SayHi = (name, age = 0) => {
    console.log(`${name} is ${age} year old`);
}

SayHi('Joe') // Joe is 0 year old. Because defined the default age 0.
 
console.log("================================================")

//! 4th Example
var add = (a, b) => {
    return a + b;
}

var sum = add(2) 
console.log(sum) // NaN Because the expected 2 arguments but provide is 1.

//! 5th Example
var add = (a, b) => {
    return a + b;
}

var sum = add(2, 10) 
console.log(sum) // 12

//! 6th Example
var add = (a, b = 0) => {
    return a + b;
}

var sum = add(2) 
console.log(sum) // 2