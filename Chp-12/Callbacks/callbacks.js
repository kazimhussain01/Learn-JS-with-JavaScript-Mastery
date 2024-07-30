//! CallBack Function
console.log('====Callback Function====')

//! First Example
console.log('====First Example====')
const fetchUser = (username, callback) => {
    setTimeout(() => {

        console.log('Now You have the User')

        callback({ username })
    }, 2000)
}

fetchUser('Kazim', (user) => {
    console.log(`Your name is ${user.username}`)
});

//! 2nd Example CallBack Function
console.log("====2nd Example CallBack Function====")
function sayHello(){
    console.log("SayHello!")
}

function sayHi(){
    console.log("SayHi!")
}

function add (num1, num2, callback) {
    console.log(num1 + num2)
    callback()
} 

add(10, 30, sayHello)
add(20, 30, sayHi)

//! 3rd Example Callbacks Function
function username(firstName, callback){
    callback({firstName})

    console.log("You have the 2nd User")
}

username('Hussain',  (user)=> {
    console.log(`Your Name is ${user.firstName}`)
})