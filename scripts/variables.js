/** A variable is unit of dat storage
 *It is made up of three things; the Identifier,

 *the Operator and the Value. 

 *The Identifier is the name of the variable.

 *In JavaScript the value determines the data type of the variable.

 *Similar to other programming languages, Javascript allows to 

 Declare, Initalise or assign to variables

*Syntax

*1. Declaring a variable

*Keyword followed by the Identifier

*we can use either var or let or const during 

declaration, and initalisation of variables.

*let and const are recommended

*/


let country; //Declaring a variable

country = "Uganda"; //Assigning to a variable 

const city = "Kampala"; //Declaring and assigningto a variable or intialisation to a variable


console.log(country); //Printing the value of a variable


document.write(city); //Printing the value of variable to the browser


//Data Types

//1.String: A string isa sequence of characters.

//strings are enclosedin doublequotes or
//single quotes or backticks

let first_name = 'Moureen' //single quotes
let last_name = "Ochieng" //double quotes
let middle_name = `Caroline` //Backticks

//2.Number: Anumber is a sequence of digits

let age = 12; //Number||Interger

let income = 620.50; //Number||Float

let height = 5.0 //Number||Float


console.log(typeof age);
console.log(typeof income);
console.log(typeof height);


//3.Boolean

let is_pregnant = false;

let is_sick = true;

console.log(typeof is_pregnant);

//4.underfined

let is_underfined;
console.log(typeof is_underfined)

//5.Null

let is_null = null;

console.log(typeof is_null);

//6.Object

let is_object = {} //object
console.log(typeof is_object);


let is_array = [] //Array
console.log(typeof is_array)


let is_array_2 = new Array(); //Array value and data type

console.log(typeof is_array_2)

let is_function = () => {}; //function value and datatype
console.log(typeof is_function);

function is_function_2() {}; //function value and datatype

console.log(typeof is_function_2);


let is_function_3 = function() {}

console.log(typeof is_function_3)

//conversion

let number1 = "100"

let number2 = 50

console.log(number1 > number2) //False

console.log(typeof number1) //String

console.log(typeof number2) //Number

console.log(typeof + number1) //converted into a number

console.log(typeof parseInt(number1)) //converted into a number

console.log(typeof Number(number1)) //Number.most recommended