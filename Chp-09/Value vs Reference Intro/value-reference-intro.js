//! Value and Reference Intro

// JavaScript differentiate Data Types on:

// - Primitive values (Number, String, Boolean...)
// - Complex values (Object, Arrays)

console.log("====Value and Reference Intro====")

//! First Example
console.log("====First Example====")
let x = 1; // 2
let y = x; // 1

x = 2

console.log(`x = ${x}`)
console.log(`y = ${y}`)

//! 2nd Example
console.log("====2nd Example====")

let firstName =  "Kazim"
let secondName = firstName

firstName = "Hussain"

console.log(`First Name: ${firstName}`)
console.log(`Second Name: ${secondName}`)

//! 3rd Example
console.log("====3rd Example====")

let animals = ['dogs', 'cats']
let otherAnimals = animals

animals.push('lion')

console.log(`Animals: ${animals}`) // dogs,cats,lion
console.log(`Other Animals: ${otherAnimals}`) // dogs,cats,lion

//! 4th Example
console.log("====4th Example====")

const person = {firstName: "Kazim", lastName: "Hussain"}
const otherPerson = person

person.firstName = "VJ KAZIM"

// PERSON AND OTHERPERSON POINT TO THE !SAME LOCATION! IN THE MEMORY
console.log(person)
console.log(otherPerson)

// PERSON AND OTHERPERSON POINT
console.log("====5th Example====")
var personName = {names: "john"}
var otherPerson1 = {names: "John"} 

console.log(personName === otherPerson1) // false why this false! because !Store! the different values in the memory

console.log("====6th Example====")
var personName = {names: "john"}
var otherPerson1 = personName // as a reference

console.log(personName === otherPerson1) // true! because the a reference value