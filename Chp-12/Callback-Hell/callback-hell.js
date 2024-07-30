//! CallBack Hell Function
console.log('====Callback Hell Function====')

const fetchUser = (username, callback) => {
    setTimeout(() => {
        console.log('Now You have the User')

        callback({ username })
    }, 2000)
}

const fetchPhotos = (username, callback) => {
    setTimeout(() => {
        console.log(`Now We have the Photos for ${username}`)

        callback(['Photo 1', 'Photo 2', 'Photo 3'])
    }, 2000)
}

const fetchPhotosDetails = (photos, callback) => {
    setTimeout(() => {
        console.log(`Now We have the Photos details for the ${photos}`)

        callback('Details...!')
    }, 2000)
}

fetchUser('Kazim', (user) => {
    console.log(`Your name is ${user.username}`)

    fetchPhotos(user.username, (userPhotos)=> {
        console.log(`Your Photos are: ${userPhotos}`)

        fetchPhotosDetails(userPhotos[0], (details) => {
            console.log(`Your Photo details ${details}`)
        })
    })
});
