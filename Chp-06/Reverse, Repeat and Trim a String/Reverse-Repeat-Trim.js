//! Reverse-Repeat-Trim

console.log("====Reverse-Repeat-Trim====")

//! Reverse Method
console.log("====Reverse Method====")
const exampleString = 'test'

const reversedString = exampleString.split('').reverse().join("")
console.log(reversedString) // tset

//! Repeat Method
console.log("====Repeat Method====")

const repeatString = exampleString.repeat(5)
console.log(repeatString) // test, test, test, test, test

//! Trim Method
console.log("====Trim Method====")
// trim method remove a Empty Spaces

const exampletrim = '    Hello, World   '

const trimString = exampletrim.trim()
console.log(exampletrim) // real string
console.log(trimString) // trim string
