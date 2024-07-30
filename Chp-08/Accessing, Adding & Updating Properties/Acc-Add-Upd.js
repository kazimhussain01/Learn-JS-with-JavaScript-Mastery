//! Accessing, Adding & Updating Properties in Object
console.log("====Accessing, Adding & Updating Properties====")

//! Accessing Object with DOT NOTATION
console.log("====Accessing Object with DOT NOTATION====")

const person = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    Hobby: 'Gym',
    Food: 'Pizza',
    cAr: 'Toyota',
}

console.log(person.firstName)
console.log(person.Hobby)
console.log(person.Food)

//! Accessing Object with SQUARE BRACKET
console.log("====Accessing Object with SQUARE BRACKET====")
console.log(person['lastName'])
console.log(person['age'])
console.log(person['Hobby'])

//! Accessing Property in Object Dynamically
console.log("====Accessing Property in Object Dynamically====")

const personAge = 'age'
console.log(person[personAge])

//! Adding Property in Object
console.log("====Updating Object====")
var property = 'Car'
console.log(person)
