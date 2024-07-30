//! Methods
console.log("====Method====")

//! Get Keys in Objects
// Object.keys() Creates an array containing the keys of an object.
console.log("====Get Keys in Objects====")

const personName = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    Hobby: 'GYm',
    Food: 'Pizza'
}

const getKeys = Object.keys(personName)
console.log(getKeys)

//! Get Values in Object
// Object.values() creates an array containing the values of an object.
console.log("====Get Values in Object====")

const personInfo = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    Hobby: 'GYm',
    Food: 'Pizza'
}

const getValues = Object.values(personInfo)
console.log(getValues)

//! Entires Method
// Object.entries() create a nested array of the key/value pairs of an array
console.log("====Entires Method====")

const Fullname = {
    firstName: 'Kazim',
    lastName: 'Hussain',
    age: 19,
    Hobby: 'GYm',
    Food: 'Pizza'
}

const entires = Object.entries(Fullname)
console.log(entires) 

//! Freeze()
// Object.freeze() prevent modification
console.log("====Freeze====")

const user = {
    username: "Kazim",
    password: '123123'
}

const admin = Object.freeze(user)

admin.username = 'test'
admin.password = '123123123'

console.log(admin)

//! Seal()
// Object.seal() prevents new properties
console.log("====Seal====")

const username = {
    username: 'John',
    password: '123123123'
}

const newUser = Object.seal(username)

newUser.password = 'test123',
newUser.active = true

console.log(newUser)