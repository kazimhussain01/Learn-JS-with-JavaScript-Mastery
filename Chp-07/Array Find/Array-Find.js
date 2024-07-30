//! Array Find Method
console.log("====Array Find Method====")

// The Find Method for arrays return the first value that satisfied the condition

//! First Example
console.log("====First Example====")
const numbers = [1,2,3,4,5,6,7,8,9,10]

const value = numbers.find((number)=> number > 5)
console.log(value)

//! 2nd Example
console.log("====2nd Example====")
const states = ["Pakistan", "Sri Lanka", "Bangladesh", 'Dubai']

const state = states.find((state)=> state.startsWith('D'))
console.log(state)