console.log("Day 5 solution");

// find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input: 12, 18
// Output: HCF = 6

const findHCF = (a, b) => {
    let divisor = a < b ? a : b; // 12
    let dividend = a > b ? a : b; // 18

    while (dividend % divisor !==0) {
        console.log("dividend % divisor : ", dividend % divisor );
        let remainder = dividend % divisor;
        console.log("dividend / divisor: ", dividend % divisor);
        dividend = divisor;
        divisor  = remainder;
    }
    return divisor;
}

const result = findHCF(12, 24);
console.log("result: ", result);

const result1 = findHCF(15, 45);
console.log("result1: ", result1);