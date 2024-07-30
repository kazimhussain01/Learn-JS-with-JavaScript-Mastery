//! Closures in JavaScript

//! 1st Example
const outer = () => {
    const outerVar = 'Hello!'

    const inner = () => {
        const innerVar = 'Hi!'
    
        console.log(outerVar, innerVar)
    }
    
    return inner;
}

const innerFun =  outer();
innerFun()

//! 2nd Example
const init = () => {
    const hobby = 'Learning JavaScript!' // local variable created by init function

    const displayHobby = () => { // displayHobby in the inner function, a closure
        console.log(hobby) // using a variable created in the parent function
    }

    return displayHobby;
}

const myFun =  init()
myFun()