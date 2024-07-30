//! 1st Example
const inventory = [
    { price: 5, name: 'egg' },
    { price: 4, name: 'egg' },
    { price: 3, name: 'egg' },
    { price: 2, name: 'egg' }
]

// Array Filter
const prices = inventory.map((item)=> item.price)
console.log("inventory price: " + prices)

const names = inventory.map((item)=> item.name)
console.log("inventory: " + names)
