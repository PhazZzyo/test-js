"use strict";

// -------------- --------- ---- ====***** ( Exercise ) #25

function getCommonElements(array1, array2) {
  // Change code below this line
  
   const array3 = [];

for (const element of array1) {
    if (array2.includes(element)) {     
      array3.push(element);
  }
  }
  return array3;
 // Change code above this line
}

// -------------- --------- ---- ====***** ( Exercise ) #23
function filterArray(numbers, value) {
   // Change code below this line
  
  const aboveValue = [];

  // for (let i = 0; numbers[i] > value; i += 1) {
  for (let number of numbers) {
    if (number > value) {     
    aboveValue.push(number);
      continue;
      }
  }

  return aboveValue;

  // Change code above this line
}


// -------------- --------- ---- ====***** ( Exercise ) #22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (let i = min; i <= max; i += 1) { // Change this line
    numbers.push(i);
  }
  
  // Change code above this line
  return numbers;
}

// -------------- --------- ---- ====***** ( Exercise ) #21

function findLongestWord(string) {
  // Change code below this line

  const stringSplit = string.split(" ");
let longestWord = "";
  
  for (const word of stringSplit) {
     if (word.length > longestWord.length) {
  
  
longestWord = word;
     }
  }
  
return longestWord;
  // Change code above this line
}

// -------------- --------- ----====***** ( -------------- --------- ----====***** ( Exercise )  )  #20

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) { // Change this line
    total += order[i];
  
  }
  
  // Change code above this line
  return total;
}


// -------------- --------- ---- ====***** ( Exercise ) #19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0;  i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// -------------- --------- ---- ====***** ( Exercise ) #18

function calculateTotal(number) {
 // Change code below this line

 let sum = 0;

  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }

  return sum;

  // Change code above this line
}




// -------------- --------- ---- ====***** ( Exercise ) #17


// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
