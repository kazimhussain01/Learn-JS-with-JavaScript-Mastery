//! Promises
// They are the objects either return the successfully fetched data, or the error

//! First Example
console.log("====Promises====")

const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('[Now We have the User]')

        resolve({ username: "Kazim" })
        // reject('User not found')
    }, 2000)
});

fetchUser
    .then((user) => console.log(user.username))
    .catch((error) => console.log(error));

//! 2nd Example
console.log("====2nd Example====")

const fetchPhotos = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Now We have the Photos')

        resolve({ photo: "Photo 1" })
    }, 2000)
})

fetchPhotos.then((userphoto) => console.log(userphoto.photo))