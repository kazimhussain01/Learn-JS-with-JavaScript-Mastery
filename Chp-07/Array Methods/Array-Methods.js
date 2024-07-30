//! Array Method
console.log("=====Array Method=====")

var names = ['jon', 'Bob', 'John', 'Mark']

console.log(names)

//! Array Push Method
// Array Push - Add a new value to the end of the array
console.log("====Array Push Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

names.push('Tom')
console.log(names)

//! Count Push Method Length 
console.log("====Count Push Method Length====")

console.log(names.push())

//! Array Pop Method
// Array Pop - Delete the last element from the array
console.log("====Array Pop Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

console.log(names) // Real Array

names.pop()
console.log(names) // Pop Method Array

//! Remove Array Element Show 
console.log("====Remove Array Element Show====")

var names = ['jon', 'Bob', 'John', 'Mark']

console.log(names) // Real Array

const RemoveElement = names.pop()
console.log(RemoveElement)

//! Array Shift Method
// Delete the first element of the array
console.log("====Array Shift Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

names.shift()
console.log(names)

//! Array Unshift Method
// Add the new value to the start of an array
console.log("====Array Unshift Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

names.unshift("Kazim")
console.log(names)

//! Array Splice Method
// It adds/remove values from any position of an array
console.log("====Array Splice Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

console.log(names) // Real Array

names.splice(2, 2)
console.log(names)

//! Array Slice Method
// Copies certain parts of an array into a element created array
console.log("====Array Slice Method====")

var names = ['jon', 'Bob', 'John', 'Mark']

console.log(names) // Real Array

const noLikeJon = names.slice(3)
console.log(noLikeJon)