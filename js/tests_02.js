// "use strict";

// -------------- --------- ---- ====***** ( Exercise ) #32

function includes(array, value) {
  // Change code below this line
for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }  
  }
  return false;
  
  // Change code above this line
}

// -------------- --------- ---- ====***** ( Exercise ) #31

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;      
    }
  } 
  // Change code above this line
}


// -------------- --------- ---- ====***** ( Exercise ) #30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// -------------- --------- ---- ====***** ( Exercise ) #29

function getEvenNumbers(start, end) {
   // Change code below this line

const evenNumbers = [];
let array = [];
 for (let i = start; i <= end; i += 1) { // Change this line
    array.push(i);
  }  
 for (const number of array) {

    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
 }
 
  return evenNumbers;

  // function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
//   // Change code above this line
// }


    // Change code above this line
  }

// -------------- --------- ---- ====***** ( Exercise ) #27

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }  
  
  return filteredNumbers;
  // Change code above this line
}

// -------------- --------- ---- ====***** ( Exercise ) #26

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

   
  for (const price of order) {
  total += price;
}

  // Change code above this line
  return total;
}


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

// console.log(getCommonElements([1, 2, 3], [2, 4]));


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
