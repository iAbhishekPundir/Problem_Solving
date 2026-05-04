console.log("Assigment solution...");
//Problem 1: Create a package.json file for your project using npm init command and explain its purpose.
//The purpose of package.json file is to manage the depedencies of the project and to provide information about the project such as name, version, description, author, etc. It also allows our project to be easily shared and installed by others. It is a crucial file for any Node.js project as it helps to keep track of the packages and libraries that the proect relies on, making it easier to maintain and update the project in the future.

//Problem 2: Create a method to calculate the area of a circle

const calculatreAreaOfCircle = (radius) => {
  if (radius < 0) {
    return "Radius cannot be negative";
  }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
};

const result = calculatreAreaOfCircle(5);
console.log(`The area of the circle with radius 5 is: ${result}`);

