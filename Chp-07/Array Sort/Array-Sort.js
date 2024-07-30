//! Array Sort Method 
// => alphabetically
// => sorts number in ascending order

console.log("====Array Sort Method====")

//! 1st Example
var names = ["Jane", "John", "Bob", "Mark"]

names.sort()
console.log(names) // 'Bob', 'Jane', 'John', 'Mark'

//! 2nd Example
console.log("====2nd Example====")
var numbers = [1,3,6,2,4,9,7,5]

numbers.sort()
console.log(numbers) //   1, 2, 3, 4, 5, 6, 7, 9

//! 3rd Example
// => sorts number in ascending order
console.log("====3rd Example====")
var number = [1,4,6,9,15,54,44,60] 

number.sort()
console.log(number) // 1, 15,  4, 44, 54,  6, 60, 9

//! 4tg Example
// => sorts number in ascending order
console.log("====4th Example====")
var number = [1,4,6,9,15,54,44,60] 

// Ascending Order
console.log("====Ascending Order====")
number.sort((a,b)=> a - b)
console.log(number) //  1,  4,  6,  9, 15, 44, 54, 60

// Descending Order
console.log("====Descending Order====")
number.sort((a,b)=> b - a)
console.log(number) //  60, 54, 44, 15, 9,  6,  4,  1

