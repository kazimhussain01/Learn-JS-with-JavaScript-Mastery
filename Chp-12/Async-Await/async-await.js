//! Async Function Return Promise
console.log('====Async Function Return Promise====')

const fetchNumber = async () => {
    return 25;
}

const consoleFetchedNumber = async () => {
    const number = await fetchNumber();

    console.log(number)
}

consoleFetchedNumber();

//! One More Example 
const fetchString = async () => {
    return "Kazim"
}

const consoleFetchedString = async () => {
    const String =  await fetchString()

    console.log(String)
}

consoleFetchedString()