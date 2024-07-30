//! Array Includes Method
console.log("====Array Includes Method====")

//! 1st Example
const numbers = [1,2,3,5,6]

console.log(numbers.includes(2))

//! 2nd Example
console.log("====2nd Example====")
const petsName = ['cat', 'dog', 'lion']

console.log(petsName.includes('cat'))
console.log(petsName.includes('Cat'))

//! 3rd Example
console.log("====3rd Example====")

const booksshelf = ["Moby Dick", "The Great Gatsby", "Pride and Prejude"]

if(booksshelf.includes("Moby Dick") === true){
    console.log('We have that book, here you go.')
} else{
    console.log('Cannot find the book sorry!')
}

console.log("====4th Example====")
if(booksshelf.includes("moby dick") === true){
    console.log('We have that book, here you go.')
} else{
    console.log('Cannot find the book sorry!')
}