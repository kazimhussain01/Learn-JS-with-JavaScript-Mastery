//! Statically & Dynamically Data Type

//! Statically Data Type
let message = "Hello, World!"
console.log(typeof message) // string

message = 10
console.log(typeof message) // number

//* Statically Data Type Advantages
// 1- Early error detection at compile time.
// 2- Generally, better performance because the compiler can optimize code based on known types.

//* Statically Data Type DisAdvantages
// More verbosity due to explicit type declarations.
// Potentially less flexibility in certain programming paradigms.

//! Dynamically Data Type
//In dynamically typed languages, variable types are determined at runtime. The type of a variable does not need to be explicitly declared, and it can change during the execution of the program.

//* Dynamically Data Type Advantages
// 1- Less verbose code; you don't need to declare types explicitly.
// 2- More flexibility as variables can change types during runtime.

//* Dynamically Data Type DisAdvantages
// 1- Errors related to type mismatches may only surface at runtime.
// 2- Potential performance overhead because type checking is done during runtime.