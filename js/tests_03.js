// "use strict";

// // -------------- --------- ---- ====***** ( Exercise ) #32

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg) {
//     total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #31

// Change code below this line
// function add(...args) {
//     let total = 0;
//     for (arg of args) {
//         total += arg;
// }
//   return total;
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   const newTask = { completed: false, category: "General", priority: "Normal", ...data };
  
//   return newTask;
  
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #29

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// // -------------- --------- ---- ====***** ( Exercise ) #28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // -------------- --------- ---- ====***** ( Exercise ) #27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// // -------------- --------- ---- ====***** ( Exercise ) #26

// // Change code below this line
// function calculateMeanTemperature(forecast) {
  
//   const {
//   today: { low: todayLow, high: todayHigh },
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh }
// } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #24

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
  
// } = forecast;

// // -------------- --------- ---- ====***** ( Exercise ) #24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// // -------------- --------- ---- ====***** ( Exercise ) #20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

// let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//      totalPrice = product.price * product.quantity; 
//     }        
// }
// return totalPrice;

//   // Пиши код выше этой строки
// }


// // -------------- --------- ---- ====***** ( Exercise ) #19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propValues = [];

//   for (const product of products) {
//     if ("name" === propName) {
//      propValues.push(product.name); 
//     }
//     if ("price" === propName) {
//      propValues.push(product.price); 
//     }
//     if ("quantity" === propName) {
//      propValues.push(product.quantity); 
//     }
     
// }
// return propValues;

//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   let productPrice = null;
  
//   for (const product of products) {
//     if (product.name === productName) {
//       productPrice = product.price;    
//       }
// }
// return productPrice;
//   // Change code above this line
// }

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