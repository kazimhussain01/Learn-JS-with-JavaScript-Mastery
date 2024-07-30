//! Interval and Timers
console.log("====Interval and Timers====")

//! SetInterval Function
const myInterval = setInterval(() => {
    console.log("Hello, World")
}, 10)

//! clearInterval Function clear all Function
clearInterval(myInterval)

//! setTimeout
console.log("====setTimeout Function====")
const myTimeOut = setTimeout(() => {
    console.log("Hello, World")
}, 1000)

//! clearTimeout
clearTimeout(myTimeOut)