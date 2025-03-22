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

*/


let result = "5" - 2;//number convsersion of string; 
console.log("The result is: " + result);

let isValid = Boolean("false");//the if statement executes beacuse the string "false" is a truly value
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;// + operater triggers string concatenation, converts 5 into string and add it to string variable age"25" to yield string 255
//added explicit type conversion Number() to variable (age) to change data type from string to number
console.log("Total Age: " + totalAge);

//added explicit example with edge case of 0
let compliment = Boolean (totalAge == 0);
if(compliment){
  console.log("You are a newborn baby!");
}

let compliment2 = "You are" + " " + age + " " + "years young!";//added implicit example
console.log(compliment2);