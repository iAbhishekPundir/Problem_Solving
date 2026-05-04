console.log("Assigment solution...");
//Problem 1: Create a package.json file for your project using npm init command and explain its purpose.
//The purpose of package.json file is to manage the depedencies of the project and to provide information about the project such as name, version, description, author, etc. It also allows our project to be easily shared and installed by others. It is a crucial file for any Node.js project as it helps to keep track of the packages and libraries that the proect relies on, making it easier to maintain and update the project in the future.

//Problem 2: Create a method to calculate the area of a circle

// const calculatreAreaOfCircle = (radius) => {
//   if (radius < 0) {
//     return "Radius cannot be negative";
//   }
//     const area = Math.PI * Math.pow(radius, 2);
//     return area;
// };

// const result = calculatreAreaOfCircle(5);
// console.log(`The area of the circle with radius 5 is: ${result}`);


//Problem 3 : 

const performOperation = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operation.";
  }
};      

const result1 = performOperation(10, 5, "add"); // 15` 
const result2 = performOperation(10, 5, "subtract"); // 5
const result3 = performOperation(10, 5, "multiply"); // 50
const result4 = performOperation(10, 5, "divide"); // 2
const result5 = performOperation(10, 0, "divide"); // "Error: Division by zero is not allowed."
const result6 = performOperation(10, 5, "modulus"); // "Error: Invalid operation."      
console.log(`Addition: ${result1}`);
console.log(`Subtraction: ${result2}`);
console.log(`Multiplication: ${result3}`);      
console.log(`Division: ${result4}`);
console.log(`Division by zero: ${result5}`);
console.log(`Invalid operation: ${result6}`);