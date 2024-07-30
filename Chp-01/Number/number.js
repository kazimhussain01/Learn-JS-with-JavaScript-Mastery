//! Number Data Type

// int whole-number = 5
// float decimal-number = 0.5

// Number Example with Whole_Number
const whole_number = 55555
console.log(whole_number) // 5555

// 2nd Example with Decimal_Number
const decimal_number = 0.3333
console.log(decimal_number) // 0.3333

//! Apply Multiple Function like this (+, -, *, /)
//Plus(+) Functionality 

const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber;
console.log(result) // 15

//Subtraction(-) Functionality 

const firstNumber1 = 5;
const secondNumber1 = 10;
console.log(firstNumber - secondNumber) // -5

//Multiply(*) Functionality 

const firstNumber2 = 5;
const secondNumber2 = 10;
const result2 = firstNumber2 * secondNumber2;
console.log(result2) // 50

//Division(/) Functionality 

const firstNumber3 = 5;
const secondNumber3 = 10;
const result3 = firstNumber3 / secondNumber3;
console.log(result3) // 0.5

// it's not a mathmetical Operation
const firstNumber4 = "Hello World";
const secondNumber4 = 10;
const result4 = firstNumber4 / secondNumber4;
console.log(result4) //NaN

//! Typeof

const firstNumber5 = "Hello World";
const secondNumber5 = 10;
const result5 = firstNumber5 / secondNumber5;
console.log(typeof result5) // number

//! Typeof
const firstNumber6 = "Hello World";
const secondNumber6 = 10;
const result6 = firstNumber6 / secondNumber6;

// The Reason for this is in computing NaN is Actually Technically Numeric Data type
// Therefore, the number type was shown on the screen
console.log(typeof result6) // number