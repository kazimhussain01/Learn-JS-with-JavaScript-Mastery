//! Object 
// In JavaScript, the object is a versatile and complex data type that allows you to store and organize data in key-value pairs.

// Object Example
const personName = {
    name: "Kazim Hussain",
    age: 18,
    education : "ICS",
    height : "5.5 feet"
}

console.log(personName) // { name: 'Kazim Hussain', age: 18, education: 'ICS', height: '5.5 feet'}

// 2nd Example Object 
//* Get Specific Value in the object with "Dot Notation"

const personName1 = {
    name: "Kazim Hussain",
    age: 18,
    education : "ICS",
    height : "5.5 feet"
}

console.log(personName.name +"\n"+ personName.age +"\n"+ personName.education) //Kazim Hussain, 18, ICS

// 3rd Example Object
const person = {
    firstName: "Kazim",
    lastName: "Hussain",
    age: 18,
    address: {
      city: "Pakistan",
      zipCode: "56300"
    }
  };

console.log(person.firstName) // Kazim
console.log(person.lastName) // Hussain
console.log(person.address.city) // Pakistan 
console.log(person.address.zipCode) // 56300


//! Typeof
const personName2 = {
    name: "Kazim Hussain",
    age: 18,
    education : "ICS",
    height : "5.5 feet"
}

console.log(typeof personName2) // object


//! Typeof
const arr = [1,2,3,4]
console.log(typeof arr)