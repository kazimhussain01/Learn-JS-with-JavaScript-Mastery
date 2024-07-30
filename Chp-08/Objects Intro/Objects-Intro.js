//! Object 
// Object is an unordered collection of related data in form of key and value pairs.
console.log("====Object====")

//! First Example
const person = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    hobby: 'Gym',
    Food: 'Pizza'
}

console.log(person)

//! Nested Object Example
console.log("====Nested Object Example====")

const personInformation = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    hobby: 'Gym',
    Food: 'Pizza',
    car: {
        brand: 'Toyota',
        year: 2024,
        color: 'black'
    }   
}

console.log(personInformation)

//! Get Car Information
console.log("====Getting Car Information====")

console.log(personInformation.car)