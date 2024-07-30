//! Introduction-Asynchronous-JavaScript
console.log("====Introduction-Asynchronous-JavaScript====")

const functionOne = () => {
    console.log('Function One')

    functionTwo();

    console.log('Function One, Part 2')
}


const functionTwo = () => {
    console.log('Function Two')
}

functionOne()

//! One More Example with SetTimeOut
console.log("====One More Example with SetTimeOut====")
const function1 = () => {
    console.log("Function 1")

    function2();

    console.log('Function 1, Part 2')
}

const function2 = () => {
    setTimeout(() => {
        console.log("Function 2 Execute after 2 Minute Because I use setTimeOut function in this function")
    }, 2000)
}

function1();