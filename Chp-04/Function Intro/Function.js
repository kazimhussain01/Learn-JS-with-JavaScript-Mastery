//! Function
// A function in JavaScript is similar to a procedure——a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

//  A BLOCK OF CODE => PERFORMS A TASK

//! 1s tExample 
// A FUNCTION DECLARATION (defined a function)
function Square(number){
    console.log("I'M HERE") // "I'M HERE"
    return number * number;
}

// A FUNCTION CALL (calling/executing a function)
Square()

//! 2nd Example
// A FUNCTION DECLARATION (defined a function)
function Addition(number){
    return number + number;
}

// A FUNCTION CALL (calling/executing a function)
var result = Addition(5,5)
console.log(result)  // 10

//! 3rd Example
// A FUNCTION DECLARATION (defined a function)
function Kazim(string){
    return string + string;
}

// A FUNCTION CALL (calling/executing a function)
const result1 = Kazim()
console.log(result1) // NaN