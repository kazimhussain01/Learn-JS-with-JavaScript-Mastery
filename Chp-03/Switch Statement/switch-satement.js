//! Switch Statement

//* The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.

//! Switch Statement
console.log("===Switch Statement===")
var ItDeveloper = "Kazim"

switch (ItDeveloper) {
    case "Kazim":
        console.log("Kazim is a Full Stack Developer")
    case "Tayyab":
        console.log("Tayyab is a Graphic Designer")
    case "Hamza":
        console.log('Hamza teach Generative AI')
    case "Zain":
        console.log("Zain is Web Developer")
}

//! Switch Statement with break 
console.log("===Switch Statement with break===")
var ItDeveloper = "Kazim"

switch (ItDeveloper) {
    case "Kazim":
        console.log("Kazim is a Full Stack Developer")
    break;
    case "Tayyab":
        console.log("Tayyab is a Graphic Designer")
    break;
    case "Hamza":
        console.log('Hamza teach Generative AI')
    break;
    case "Zain":
        console.log("Zain is Web Developer")
}

//! Switch Statement with break 
console.log("===Switch Statement one more example with break===")
var ItDeveloper = "Hamza"

switch (ItDeveloper) {
    case "Kazim":
        console.log("Kazim is a Full Stack Developer")
    break;
    case "Tayyab":
        console.log("Tayyab is a Graphic Designer")
    case "Hamza":
        console.log('Hamza teach Generative AI')
    case "Zain":
        console.log("Zain is Web Developer")
}

//! Switch Statement with break 
console.log("===Switch Statement with default value===")
var ItDeveloper = "Hafiz Adnan"

switch (ItDeveloper) {
    case "Kazim":
        console.log("Kazim is a Full Stack Developer")
    break;
    case "Tayyab":
        console.log("Tayyab is a Graphic Designer")
    case "Hamza":
        console.log('Hamza teach Generative AI')
    case "Zain":
        console.log("Zain is Web Developer")
    default:
        console.log("Enter a Valid ItDeveloper Name")
}