//! String Data Type

const stringExample = "Hello, World"
console.log(stringExample) // Hello, World

// Three types of String
// 1- SingalQuote ''
// 2- DoubleQuote ""
// 3- BackTicks ``

// singal-Quote Example
console.log("====Singal Quote====")
const singleQuote = "Single Quote"
console.log(singleQuote) // Singal Quote

// 2nd Example
let country = "pakistan"
console.log(country) // pakistan
console.log(typeof country) // String


// Double-Quote Example
console.log("====Double Quote====")
const DoubleQuote = "Double Quote"
console.log(DoubleQuote) // Double Quote

// 2nd Example
let city = "Okara"
console.log(city) //Okara 
console.log(typeof city)


// Embed String in String
console.log("====Embed String in String====") 
const countries = "Pakistan, US"
console.log(countries) // Pakistan, US

const cities = "Okara, Lahore Karachi"
console.log("country: " + countries +" Cities: "+ cities) //country: Pakistan, US Cities: Okara, Lahore Karachi


// Backticks are an ES6 feature that allows you to create strings in JavaScript. Although backticks are mostly used for HTML or code embedding purposes, they also act similar to single and double quotes. Besides, using backticks makes it easier for string operations.

// Back-Tick Example
console.log("====BackTick====")
const Backtick = `Kazim Hussain`
console.log(Backtick) // Kazim Hussain

// 2nd Example
const BacktickExample = `BackTickExample: ${Backtick}`
console.log(BacktickExample) // BackTickExample: Kazim Hussain
console.log(typeof BacktickExample)

// 3rd Example
const Example3rd = `BackTick 3rd Example: ${singleQuote} + ${DoubleQuote}`
console.log(Example3rd) //BackTick 3rd Example: Single Quote + Double Quote

// it's Example not pure javascript
const Example4th = `2 + 2`
console.log(Example4th) // 2 + 2

// it's Example a pure javascript
const Example5th = `${2 + 2}`
console.log(Example5th) // 4

console.log(singleQuote +" "+ DoubleQuote +" = "+ Example5th) //Single Quote Double Quote = 4