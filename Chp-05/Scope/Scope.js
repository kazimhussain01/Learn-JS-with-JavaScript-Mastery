//! Global 
console.log("===Global Scope===")
let fname = 'John'

const logName = () => {
    console.log(fname)

    fname = 'Jane'
}

logName()

console.log(fname)

//! Local Scope / Function Scope
console.log("===Local & Function Scope===")
const someFunction = () => {
    const name = 'Janny'

    console.log(name)
}

someFunction();
// console.log(name) // ReferenceError: name is not defined


const anotherFunction = () => {
    const LastName = "Kazim"

    console.log(LastName)
}

anotherFunction();

//! Block Scope
console.log("===Block Scope===")
if(true) {
    const name = 'jane'

    console.log(name)
}

// console.log(name) // ReferenceError: name is not defined