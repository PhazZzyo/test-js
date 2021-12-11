// "use strict";

// -------------- --------- ---- ====***** ( Exercise ) #18

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  const productPrice = [];
  
  for (const product of products) {
    if productName = Object.product(name);
    productPrice.push(product.price);
}
return productPrice;
  // Change code above this line
}

// // -------------- --------- ---- ====***** ( Exercise ) #17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

//  for (const color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb);
 
// }



// // -------------- --------- ---- ====***** ( Exercise ) #16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
  
//   const salary = Object.values(salaries);
  
//   for (const i of salary) {  
//   totalSalary += i;  
// }
//   // Change code above this line
//   return totalSalary;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

   
//   const keys = Object.keys(object);
  
//   for (const key of keys) {  
//   propCount += 1;  
// }
//   return propCount;
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {  
//   values.push(apartment[key]);  
// }

// // -------------- --------- ---- ====***** ( Exercise ) #12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
    
//     for (const prop in object) {
//         // Change code below this line
//         if (object.hasOwnProperty(prop)) {
//             propCount += 1;
//         }
//     }
//   // Change code above this line
//   return propCount;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Change code above this line
// }


// // -------------- --------- ---- ====***** ( Exercise ) #10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);  
// }