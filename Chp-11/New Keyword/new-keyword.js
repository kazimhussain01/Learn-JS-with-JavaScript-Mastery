//! New KeyWord
console.log("====New Keyword====")

//! New Keyword Create a New Empty Object
//* First Example

const Person = {}
const Person1 = new Object()

console.log(Person) // {}
console.log(Person1) // create this new empty object = {}

//! Adding a Value on Person and Person1
console.log("====Adding a Value on Person====")

Person.Name = "Kazim"
Person1.Name = "Hussain"

console.log(Person) // { Name: 'Kazim' }
console.log(Person1) // { Name: 'Hussain' }

//! New Keyword with Array 
console.log("====New Keyword with Array====")
const arr = [1,2,3]
const arr1 = [1,2,3,4]

console.log(arr, arr1) // [ 1, 2, 3 ], [ 1, 2, 3, 4 ]      

//! New Keyword with Date 
console.log("====New Keyword with Date====")
const myDate = new Date('November 21, 2004')
console.log(myDate) // 2004-11-20T19:00:00.000Z

//! Get Full Year
console.log("====Get Full Year====")
console.log(myDate.getFullYear()) // 2004

//! New Keyword with Number
console.log("====New Keyword with Number====")
const myNumber = new Number(100.78354)
console.log(myNumber.toFixed(0)) // 101

//! Array Push Method 
console.log("====Array Push Method====")
const arr2 = [1,2,3,4]

arr2.push(5)
console.log(arr2) // [ 1, 2, 3, 4, 5 ]