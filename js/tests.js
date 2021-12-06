
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



console.log(getCommonElements([1, 2, 3], [2, 4]));