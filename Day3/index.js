// 1.Print Right-Angled Star Triangle
// function printRightAngledStarTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }

// printRightAngledStarTriangle(5);

// 2. Print Inverted Right-Angled Triangle

function printInvertedRightAngledTriangle(rows) {
  for (let i=1; i<=rows; i++) {
    let str='';
    for (let j=rows-i+1; j>1; j++) {
       str = str + "*";
    }
    console.log(str);
  }
}

printInvertedRightAngledTriangle(5);
