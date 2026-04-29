//1.Print Numbers from 1 to N
// console.time();
// let n = 100;
//Time complexity -> O(n)
// for(let i=1; i<= n; i++) {
//     console.log(i);
// }
// console.timeEnd();

//Time complexity -> O(n)
//2.Print Numbers from N to 1 without changing the loop condition of above question
// for(let i=1; i<= n; i++) {
//     console.log(n-i+1);
// }
// for(let i=5; i>0; i--) {
//     console.log(i);
// }

//Time complexity -> O(n)
//3.Print All Even Numbers from 1 to N
// for(let i=1;i<n;i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }
//Time complexity -> O(n/2) -> O(n)
// for(let i=2;i<n;i+=2) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

//4.Sum of irst N Natural Numbers
// console.time();
// let n = 5000000000;
// let sum = 0;
//Time complexity -> O(n)
// for(let i=1; i<=n; i++) {
//     sum = sum + i;
// }

// console.time();
// let n = 50000000n;
// let sum = 0n;
// //Time complexity -> O(n)
// for(let i=1n; i<=n; i++) {
//     sum = sum + i;
// }
// console.log(sum)
// console.timeEnd();

/*optimised approach using maths formula*/
//Time complexity -> O(1)
// sum = (n * (n+1))/2;
// console.log(sum);
// console.timeEnd();
// console.log(Number.MAX_SAFE_INTEGER);


//5.Product(Factorial) of N
// let n = 5;
// let productSum = 1;
// //Time complexity -> O(n)
// for(let i=n; i>0; i--) {
//     productSum = productSum * i;
//     productSum *=i;
// }
// console.log(productSum);

//6.Sum of All Even Numbers upto N
// let n = 16;

// let sumOfEvenNum = 0;
//Time complexity -> O(n)
// for(let i=1; i<=n; i++) {
//     if (i%2 === 0) {
//         sumOfEvenNum = sumOfEvenNum + i;
//     }
// }

//Time complexity -> O(n/2)
// for(let i=2; i<=n; i+=2) {
//     if (i%2 === 0) {
//         sumOfEvenNum = sumOfEvenNum + i;
//     }
// }

// const k = Math.floor(n/2);
// sumOfEvenNum = k*(k+1);
// console.log(sumOfEvenNum);

//7.Print Squares Of Numbers from 1 to N
// let n = 5;
//Time complexity -> O(n)
// for(let i=1; i<=n; i++) {
//     console.log(i*i);
// }

//Time complexity -> O(n)
// for(let i=1; i<=n; i++) {
//     console.log(i**2);
// }

// for (let i = 1; i <=n; i++) {
//     console.log(Math.pow(i, 2));
// }

//Homework/Practice Challenge
//1.Prnt all numbers divisble by 3 and 5 upto N
// let n=30;
//Time complexity -> O(n)
// for(let i=1;i<=n;i++) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log(i);
//     }
// }

//2. Find the sum of all odd numbers upto N
// let n = 10;
// let sum = 0;
//Time complexity -> O(n)
// for(let i=1; i<=n;i++) {
//     if(i%2 !== 0) {
//         sum = sum + i;
//     }
// }

//Time complexity -> O(1)
// const k = Math.floor((n+1)/2);
// sum = k * k;
// console.log(sum);

//3. Print the cubes of numbers from 1 to N
// let n = 5;
// for(let i=1; i<=5n;i++) {
//     console.log(i*i*i);
// }

//4. Print only the numbers that are both even and perfect squares
// let n=20;
// for(let i=1; i<=n;i++) {
//     if(i%2===0) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             console.log(i)
//         }
//     }
// }