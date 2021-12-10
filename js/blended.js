// "use strict";

// -------------- --------- ---- ====***** ( Exercise of blended lesson 4.12.2021 )

const all = ['apple', 'banana', 'tomato', 'potato', 'cucumber', 'orange', 'carrot', 'ananas'];
const vegetables = ['tomato', 'potato', 'cucumber', 'carrot'];
const fruits = [];

  for (const element of all) {
    if (!vegetables.includes(element)) {     
      fruits.push(element);
    }
}
  
  console.log(`Fruits are: ${fruits}`);


  