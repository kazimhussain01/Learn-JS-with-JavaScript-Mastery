//! The "This" Keyword
console.log("====This Keyword====")

function Sentence(word){
    this.word = word

    console.log(this)
}

const firstSentence = new Sentence('Hello, This is a New Sentence')

//! One More Example with This Keyword to Get the Value
console.log("====One More Example with This Keyword====")

const person = {
    name: 'John',
    getName() {
        console.log(this)
    }
}

person.getName()

//! One More Example
console.log("====One More Example====")
function Car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this);
}

const blueCar = new Car('Blue', 'BMW', 4)
const redCar = new Car('Red', 'Ferrari', 4)

