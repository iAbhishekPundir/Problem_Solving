console.log("Day 5 solution");
//1.Print All Factors of a Number

// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

// const findFactors = (num) => {
//   const smallFactors = [];
//   const bigFactors = [];
//   const limit = Math.sqrt(num);
//   for (let i = 1; i <= limit; i++) {
//     if (num % i === 0) {
//       smallFactors.push(i);
//       const pair = num/i;
//       if (i !== pair) {
//         bigFactors.push(pair);
//       }
//     }
//   }
//   return smallFactors.concat(bigFactors.reverse());
// };

// const result = findFactors(24);
// console.log("result: ", result);

//2.Print All Multiples of a Number up to N

// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]

// const findMultiplesUptoN = (num, limit) => {
//   const factors = [];
//   let counter = 0;
//   for (let i = 1; i <= Math.floor(limit/num); i++) {
//     counter++;
//     let calculatedFactor = num * i;
//     if (calculatedFactor <= limit) {
//       factors.push(calculatedFactor);
//     }
//   }
//   console.log("counter: ", counter);
//   return factors;
// };
// const result = findMultiplesUptoN(4, 80);
// console.log("result: ", result);

//3.Find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input: 12, 18
// Output: HCF = 6

// const findHCF = (a, b) => {
//     let divisor = a < b ? a : b; // 12
//     let dividend = a > b ? a : b; // 18

//     while (dividend % divisor !==0) {
//         console.log("dividend % divisor : ", dividend % divisor );
//         let remainder = dividend % divisor;
//         console.log("dividend / divisor: ", dividend % divisor);
//         dividend = divisor;
//         divisor  = remainder;
//     }
//     return divisor;
// }

// const result = findHCF(12, 24);
// console.log("result: ", result);

// const result1 = findHCF(15, 45);
// console.log("result1: ", result1);

// 4.Find the LCM (Least Common Multiple) of Two Numbers

// Input: 12, 18
// Output: LCM = 36

// const findLCM = (a, b) => {
//   let counter = 0;
//   const largest = a > b ? a : b;
//   const smallest = a < b ? a : b;
//   for (let i = 1; i <= smallest; i++) {
//     counter++;
//     if ((largest * i) % smallest === 0) {
//       console.log(counter);
//       return largest * i;
//     }
//   }
// };

// const result = findLCM(12, 18);
// console.log("result: ", result);

// ********. HOMEWORK ********

//1. Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors

// const findTotalNumberOfFactors = (num) => {
//   let counter = 0;
//   const limit = Math.sqrt(num);
//   for (let i = 1; i <= limit; i++) {
//     if (num % i === 0) {
//       counter++;
//       const pair = num / i;
//       if (i !== pair) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };

// const result = findTotalNumberOfFactors(24);
// console.log("result: ", result);

// 2.Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28

// const sumOfAllFactors = (num) => {
// let sum = 0;
//   const limit = Math.sqrt(num);
//   for (let i = 1; i <= limit; i++) {
//     if (num % i === 0) {
//       sum+=i;
//       const pair = num/i;
//       if (i !== pair) {
//         sum+=pair;
//       }
//     }
//   }
//   return sum;
// };

// const result = sumOfAllFactors(12);
// console.log("result: ", result);

// 3.Find the Greatest Factor of a Number (Other Than Itself)

// Input: N = 36
// Output: 18

const findGreatestFactor = (num) => {
  if (num <= 1) return null;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return num / i;
    }
  }

  return 1;
};

const result = findGreatestFactor(36);
console.log("result: ", result);
