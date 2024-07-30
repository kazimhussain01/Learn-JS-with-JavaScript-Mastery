//! Array Map Function

console.log("====Array Map Function====")

//! 1st Example
const inventory = [
    { price: 5, name: 'egg' },
    { price: 4, name: 'egg' },
    { price: 3, name: 'egg' },
    { price: 2, name: 'egg' }
]

// Array Map
const prices = inventory.map((item)=> item.price)
console.log("inventory price: " + prices)

const names = inventory.map((item)=> item.name)
console.log("inventory: " + names)

//! 2nd Example
console.log("====2nd Example====")

const ItDeveloper = [
    {name: 'kazim', roll: 'Front-end Developer'},
    {name: 'hamza', roll: 'Full-Stack Developer'},
    {name: 'tayyab', roll: 'Graphic Designer'},
    {name: 'zain', roll: 'Back-End Developer'}   
]

const DeveloperName = ItDeveloper.map((item)=> item.name)
console.log("Name: " + DeveloperName)

const Roll = ItDeveloper.map((item)=> item.roll)
console.log("Roll: " + Roll)