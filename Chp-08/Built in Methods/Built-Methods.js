//! Object Method
console.log("====Object Method====")

//! First Example
const personName = {
    firstName: "Kazim",
    age: 19,
    Hobby: "Gym",
    lastName: function(){
        console.log("Kazim Hussain")
    }
}

console.log(personName)
personName.lastName()

//! 2nd Example
console.log("====2nd Example====")
const names = {
    firstName: 'zain',
    sum: function(){
        return 2 + 2;
    }
}

console.log(names.sum())

//! 3rd Example with This Keyword
console.log("====3rd Example with This Keyword====")

const personaInfo = {
    fName: 'Kazim',
    lName: 'Hussain',
    fullName: function(){
        console.log(this.fName, this.lName)
    }
}

personaInfo.fullName()