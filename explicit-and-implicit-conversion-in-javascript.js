/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

*/


let result = "5" - 2; // Implicit conversion of string "5" to number and result is 3 as needed - so no change to the code
console.log("The result is: " + result);

let isValid = Boolean("false");//Explicit conversion and will evaluate to true 
// so variable isvalid is assigned true , if block is executed here.
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");//Explicit conversion was necessary as totalAge variable was concatenation oftwo strings
//  but the output needed was the addition of two numbers - so with use of Number() function explicit conversion is done result is 30
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

console.log("--------Implicit type conversion example--------");
let inputNumber = 10;
let inputString = "123";
let additionOnInput = inputString + inputNumber ; //Implict coversion of 'num' variable to String type,the result is 12310
console.log("The result is:" +additionOnInput);
let subtractionOnInput = inputString - inputNumber; //Implict conversion of 'str' variable to Number type, result here is 113
console.log("The result is:" +subtractionOnInput);
console.log("--------Explicit type conversion example--------");
let price = "300.99";
let tax = 10;
let totalAmount= Number(price) + tax; //Explict type conversion of price to Number type,total here is 310.99
console.log ("Amount to be paid " +totalAmount);
let userNo; //userNo is undefined -it can be classified as what are called falsy values.
if(!userNo) //  if(!false) so the block of code is executed 
{
    console.log("Userno does not exist");
}
let studentId = null;
if(studentId)
{
  console.log("student exists ");
}else {
  console.log("Student does not exists");
}