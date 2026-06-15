console.log("Day 5 solution");
// Print All Factors of a Number

// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

const findFactors = (num) => {
  const smallFactors = [];
  const bigFactors = [];
  const limit = Math.sqrt(num);
  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) {
      smallFactors.push(i);
      const pair = num/i;
      if (i !== pair) {
        bigFactors.push(pair);
      }
    }
  }
  return smallFactors.concat(bigFactors.reverse());
};

const result = findFactors(24);
console.log("result: ", result);

// find the HCF (Highest Common Factor) or GCD of Two Numbers

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
