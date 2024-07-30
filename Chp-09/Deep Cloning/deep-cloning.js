//! Deep Cloning

console.log("====Deep Cloning====")
//! First Example
console.log("====First Example====")

var person = {
    names: 'Kazim',
    car: {
        brand: 'Toyota',
        color: 'blue',
        wheels: 4
    }
}

var newPerson = {...person, car : {...person.car}}

newPerson.names = 'Hussain'
newPerson.car.color = 'red'

console.log(person.car)
console.log(newPerson.car)

//! with Stringify Method
console.log("====with Stringify Method====")

var person = {
    names: 'Kazim',
    car: {
        brand: 'Toyota',
        color: 'blue',
        wheels: 4
    }
}

var newPerson = JSON.parse(JSON.stringify(person));
 
newPerson.firstName = 'Zain'
newPerson.car.color =  'red'

console.log(person)
console.log(newPerson)