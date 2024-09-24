
// Part 1: Fizz Buzz
// for (let i=1;i<101;i++){
//  console.log(i);
//     }


// for (let i=1;i<101;i++){
//     if (i%3===0){
//         console.log(`Fizz`);
//     }
// }

// for (let i=1;i<101;i++){
//     if (i%5===0){
//         console.log(`Buzz`);
//     }
// }

// for (let i=1;i<101;i++){
//     if (i%3 ===0 || i%5===0){
//         console.log(`Fizz Buzz`);
//     } else (console.log(i))
// }

 // Part 2: Prime Time

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// //Part 3: Feeling Loopy
// let csv =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n
// 57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n
// 98,Bill,Doctor’s Assistant,26`



// for (let i=0;i<csv.length;i++){ 
//     const character = csv[i];
//     console.log(character);
//     let rows = csv.split(`/n`);
//     let header = rows.shift().split(`,`);
// } 

// const rows = csv.split("\n");
// for(let row of rows) {
//     let cell1, cell2, cell3, cell4;
//     const cells = row.split(",");
//     [cell1, cell2, cell3, cell4] = [...cells];
//     console.log(cell1, cell2, cell3, cell4);
// }


//Part 4: Transforming Data

//    let rows = csv.split(`\n`)
//    let cell = rows[i].split(',');

//    console.log(cell)
    
    
//     let result = " ";
//     for (let i=1; i<=7; i++) {
//     result += "#";
//     console.log(result);*-
//         }

// const csvArray = csv.split(`\n`)
// console.log(csvArray)


// const rows = csv.split("\n");
// for(let row of rows) {
//     let cell1, cell2, cell3, cell4;
//     const cells = row.split(",");
//     [cell1, cell2, cell3, cell4] = [...cells];
//     console.log(cell1, cell2, cell3, cell4);
// }

const csv =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const rows = csv.split("\n");
// console.log(rows);
for (let row of rows) {
  let cell1, cell2, cell3, cell4;
  const cells = row.split(",");
  // console.log(cells);
  let counter = 1;
  for (let cell of cells) {
    switch (counter) {
      case 1:
        cell1 = cell;
        break;
      case 2:
        cell2 = cell;
        break;
      case 3:
        cell3 = cell;
        break;
      case 4:
        cell4 = cell;
        break;
      default:
        break;
    }
    counter++;
  }
  console.log(cell1, cell2, cell3, cell4);
}

