//! Array Some & Every Method 
console.log("====Array Some & Every Method====")

//! 1st Example
console.log("====1st Example====")
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var greaterThan3 = (number) => number > 3
console.log(numbers.some(greaterThan3)) // true 
//* Another way 
// console.log(numbers.some((number) => number > 3)) // true
 
//! 2nd Example
console.log("====2nd Example====")
console.log("====Array Every Method")

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var greaterThan3 = (number) => number > 3
console.log(numbers.every(greaterThan3)) // false
//* Another Way
// console.log(numbers.every((number) => number > 3)) // false 
