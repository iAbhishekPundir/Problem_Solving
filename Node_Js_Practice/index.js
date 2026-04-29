//NodeJs Botcamp Practice questions
//Day1 : 
//Problem 1 : Conditional Statements
const prompt = require("prompt-sync")();
const inputAge = prompt('Please provide your age:');

if (inputAge < 0) {
    console.log("Invalid age provided.");
}
if ( inputAge < 18 && inputAge > 0) {
    console.log("You get a 20% discount.");
}
else if (inputAge >= 18 && inputAge < 65) {
    console.log("You get no discount.");
}
else if (inputAge >= 65) {
    console.log("You get a 30% senior discount.");
}