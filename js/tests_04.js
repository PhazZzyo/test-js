// // -------------- --------- ---- ====***** ( Exercise ) #07 /////////////////////////////////////////////

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (index) {    
//       if (secondArray.includes(index)) {
//         commonElements.push(index);        
//     }    
//   });

//   return commonElements;
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #06 /////////////////////////////////////////////

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// numbers.forEach(function (index) {
//       if (index > value) {
//       filteredNumbers.push(index);
//     }    
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #05 /////////////////////////////////////////////

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
  
//   orderedItems.forEach(function (index) {
//     totalPrice += index;
//   });

//   // Change code above this line
//   return totalPrice;
// }

//     totalPrice += number;
//   });
// // -------------- --------- ---- ====***** ( Exercise ) #04 /////////////////////////////////////////////

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    
//     order(pizzaName, onSuccess, onError) {
//   if (!this.pizzas.includes(pizzaName)) {
//   return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//             }
//   return onSuccess(pizzaName);
// },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// // -------------- --------- ---- ====***** ( Exercise ) #03 /////////////////////////////////////////////

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza (pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// // -------------- --------- ---- ====***** ( Exercise ) #02 /////////////////////////////////////////////

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }