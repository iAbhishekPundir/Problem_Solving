//1. Find the maximum of Three Numbers

// const a = 10;
// const b = 20;
// const c = 30;

// function maxOfThree(a, b, c) {
//   let max;
//   if (a >= b && a >= c) {
//     max = a;
//   } else if (b >= c) {
//     max = b;
//   } else {
//     max = c;
//   }
//   return max;
// }

// console.log(maxOfThree(10,20,30));

//2. Check if a NUmber is Positive, Negative or ero

// function checkPositveOrNegative(num) {
//   if (num > 0) {
//     //   console.log("Positive");
//     return "Positive";
//   } else if (num < 0) {
//     //   console.log("Negative");
//     return "Negative";
//   } else {
//     //   console.log("Zero");
//     return "zero";
//   }
// }

// console.log(checkPositveOrNegative(-9));

//3. Calculate electricity bill

// const units = 400;
// // const totalBill = 1500; output

// let totalBill = 0;

// function calculateElectricityBill() {
//   if (units <= 100) {
//     return totalBill + units * 5;
//   } else if (units <= 200) {
//     return totalBill + 100 * 5 + (units - 100) * 7;
//   } else if (units <= 300) {
//     return totalBill + 100 * 5 + 100 * 7 + (units - 200) * 10;
//   } else {
//     return totalBill + 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
//   }
// }

// console.log(calculateElectricityBill());

//4. Check if a Character is a Vowel or Constant

// function checkVowel(char) {
//   if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
//     return 'Vowel';
//   } else if (/[a-z]/.test(char.toLowerCase())) {
//     return 'Consonant';
//   }
//   return 'Not a valid alphabet';
// }

// console.log(checkVowel("1"));
// if (
//   character.toLowerCase() === "a" ||
//   character.toLowerCase() === "e" ||
//   character.toLowerCase() === "i" ||
//   character.toLowerCase() === "o" ||
//   character.toLowerCase() === "u"
// ) {
//     console.log('Vowel');
// } else {
//     console.log('Consonants')
// }

//5. Check if Year is a Leap Year

// const year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a leap year");
// }

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isLeapYear(2024) ? "Leap Year" : "Not a Leap Year");

//Homework /Practice Challenge

//1. Check if a Character is Uppercase, Lowercase, Digit or Specal Character

// function checkCharacterType(char) {
//     // Ensure we are checking only the first character
//     const code = char.charCodeAt(0);
//     if (code >= 65 && code <= 90) {
//         console.log(`${char}: Uppercase Letter`);
//     }
//     else if (code >= 97 && code <= 122) {
//         console.log(`${char}: Lowercase Letter`);
//     }
//     else if (code >= 48 && code <= 57) {
//         console.log(`${char}: Digit`);
//     }
//     else {
//         console.log(`${char}: Special Character`);
//     }
// }

// // Test Cases
// checkCharacterType("A"); // Output: Uppercase Letter
// checkCharacterType("g"); // Output: Lowercase Letter
// checkCharacterType("7"); // Output: Digit
// checkCharacterType("$"); // Output: Special Character

//2. Check triangle type using sides and angles

// const side1 = 3;
// const side2 = 4;
// const side3 = 6;

// if ((side1**2) + (side2**2) === (side3*side3)) {
//     console.log("Right-angled");
// } else if (side1 === side2 && side2 === side3) {
//     console.log("Equlateral");
// } else if ((side1 === side2) || (side2 === side3) || (side1 === side3) ) {
//     console.log("Isosceles");
// } else {
//     console.log("Scalene");
// }

// function checkTriangleType(a, b, c) {
//   //   1. validate is it's a triangle (sum ofan 2 sides > tird side)
//   if (a + b <= c || a + c <= b || b + c <= a) {
//     return "Not a valid traingle";
//   }

//   //   2.Pythogoras theoram check : a*a + b*b = c*c (in any combination)
//   const sqA = a*a;
//   const sqB = b*b;
//   const sqC  = c*c;

//   if (sqA + sqB === sqC || sqA + sqC === sqB || sqB + sqC === sqA) {
//     return "Right-Angled Triangle";
//   }

//   //3. Classification by sides
//   if ( a===b && b===c && a===c) {
//     return "Equilateral";
//   }
//   else if ( (a===b || b===c || c === a)) {
//     return "Isosceles";
//   }
//   else {
//     return "Scalene";
//   }

// }

// console.log(checkTriangleType(4, 4, 4));

//3. Calculate Income Tax Based on Slabs

function calculateIncomeTax(income) {
  if (income <= 250000) {
    return "No tax";
  } else if (income <= 500000) {
    return (5 / 100) * (income - 250000);
  } else if (income <= 1000000) {
    return (5 / 100) * 250000 + (20 / 100) * (income - 500000);
  } else {
    return (
      (5 / 100) * 250000 + (20 / 100) * 500000 + (30 / 100) * (income - 1000000)
    );
  }
}

console.log(calculateIncomeTax(750000));
