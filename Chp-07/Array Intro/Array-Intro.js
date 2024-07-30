//! Array 

console.log("====Array====")

//! 1st Example Array
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

console.log(months)

//! Get 1 Index
console.log("====Get 1 Index====")
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

console.log(months[0])
console.log(months[1])

//! Equal to Already Exit Index
console.log("====Equal to Already Exit Index====")
var months = ["Jan", "Feb", "Mar", "Apr", "May"]

months[3] = "not a April"
console.log(months)

//! Add New Index
console.log("====Add New Index====")
var months = ["Jan", "Feb", "Mar", "Apr", "May"]

months[5] = "June"
console.log(months)

//! 1 Empty item
console.log("====1 Empty item====")
var months = ["Jan", "Feb", "Mar", "Apr", "May"]

months[6] = "July"
console.log(months) // 1 Item is empty

//! Count Array Length
console.log("====Count Array Length====")
var months = ["Jan", "Feb", "Mar", "Apr", "May"]

console.log(months.length)

//! Multiply Function in Array
console.log("====Multiply Function in Array====")
var values = [
    'Apple',
    {name: "kazim"},
    true,
    function () {

    }
]

console.log(values)

//! For Loop in Array
console.log("====For Loop in Array====")
var months = ["Jan", "Feb", "Mar", "Apr", "May"]

for (let i = 0; i < months.length; i++) {
    console.log(months[i])
}