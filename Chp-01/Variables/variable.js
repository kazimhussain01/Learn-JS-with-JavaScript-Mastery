// There are three way to Declare Variables
//But mostly use let & const
// let
// const
// var

//!Let's Start with Let
//You can name the variable anything like your own name(Kazim)
// 1st Example
let variableName = "Welcome to variables";
console.log(variableName)

//2nd Example
let Kazim = "Welcome to Kazim in Console.log"
console.log(Kazim)

//!Star't with Const 
// First Example
const num = 1000
console.log(num)

// 2nd Example
const piaic = "PIAIC"
console.log(piaic)

//!Star't with Var
var name1 = "UMT"
console.log(name1)

var learnjs = "Learn Js with JavaScript Mastery"
console.log(learnjs)


//! Redeclare Variable with var. var its allowed to Redeclare variable because its a global scope But let its not allowed because its a block scope

//1st Example with var
var variableName1 = "Welcome to Variable"
var variableName1 = "kazim hussain"
console.log(variableName1)

//* 2nd Example with let
// let hussain = "Learn web 3 in piaic institute"
// let hussain = " Learn web 3 in umt university"
// console.log(hussain)

//! who special character allowed js in define variable
// 1st Example
let name_ = "Kazim Hussain"
console.log(name_)

// 2nd Example
let $name = "Kazim Rajpoot"
console.log($name)

//! Already Declare Variable
// First Example
//* Showing this Error on Console.log: Uncaught SyntaxError: Identifier 'name1' has already been declared

// let name1 = "Kazim"
// const name1 = "hussain"
// ver name1 = "hamza"

//! Resigned Variable
// First Example
let num2 = 1000
num2 = 2000
console.log(num2)

// 2dn Example
let umt = Boolean(true)
umt = false
console.log(umt);