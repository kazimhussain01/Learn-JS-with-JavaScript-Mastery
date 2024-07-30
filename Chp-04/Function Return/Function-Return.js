//! Function Return

//! 1st Example
function add (a,b) {
    return a + b;
}

const sum = add(2,3)
console.log(sum)

//! 2nd Example
function multiply (a,b) {
    return "HI I'M HERE"
    return a * b; // Unreachable code detected.
}

const multi = multiply(2,3)
console.log(multi) // "HI I'M HERE"

//! 3rd Example
function test (){
    console.log(1)
    return true;
    console.log(2)
    return false;
    console.log(3)
}

const bool = test()
console.log(bool) 