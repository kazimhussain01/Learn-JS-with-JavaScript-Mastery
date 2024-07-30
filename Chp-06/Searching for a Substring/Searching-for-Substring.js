//! Searching for SubString
console.log("====Searching for SubString====")

//! Indexof()
const hobbies = 'I love HTML, CSS and JavaScript, JavaScript!'

console.log(hobbies.indexOf('HTML')) // 7
console.log(hobbies.indexOf('JavaScript')) // 21

// Another way
const firstIndex = hobbies.indexOf('JavaScript', 22) // 33
console.log(firstIndex)

//! LastIndexof()
console.log("====LastIndexof()====")

const lastIndex = hobbies.lastIndexOf('JavaScript')
console.log(lastIndex) // 33
    

//! Includes
console.log("====Includes====")

var includesJavaScript = hobbies.includes('JavaScript')
console.log(includesJavaScript) // true

// One More Example
var includesJavaScript = hobbies.includes('React')
console.log(includesJavaScript) // false

//! Startswith
console.log("====StartsWith====")

var startswith = hobbies.startsWith('I')
console.log(startswith) // true

//One More Example
var startswith = hobbies.startsWith('love')
console.log(startswith) // false

//! Endswith
console.log("====EndsWith====")

var Endswith = hobbies.endsWith('!')
console.log(Endswith) // true

//One More Example
var EndsWith = hobbies.endsWith('JavaScript')
console.log(EndsWith) // false