//! A Classess is a Scheme for an object that save many values
console.log("====Classess====")

const Person = {
    name: 'Kazim',
    age: 19,
    isWorking: true
}

class person {
    constructor(name, age, isWorking) {
        this.name = name,
        this.age = age,
        this.isWorking = isWorking
    
        console.log(this)
    }
}

const user = new person('Kazim', 19, true) // person { name: 'Kazim', age: 19, isWorking: true }

//! One More Example
console.log("====One More Example====")

const createSchema = (fname, age, isWorking) => {
    const userSchema = {fname, age, isWorking}

    return userSchema
}


const allUser1 = createSchema("Hussain", 19, true)
const allUser2 = createSchema("Zain", 20, false)
const allUser3 = createSchema("Tayyab", 22, true)
const allUser4 = createSchema("Hamza", 24, true)

console.log(allUser1) // { fname: 'Hussain', age: 19, isWorking: true }    
console.log(allUser2) // { fname: 'Zain', age: 20, isWorking: false }      
console.log(allUser3) // { fname: 'Tayyab', age: 22, isWorking: true }     
console.log(allUser4) // { fname: 'Hamza', age: 24, isWorking: true }  