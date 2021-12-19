// // -------------- --------- ---- ====***** ( Exercise ) #25 /////////////////////////////////////////////

// Change code below this line
const getFriends = (users) => {
const allFriends = users.flatMap(user => user.friends);
const uniqueFriends = allFriends.filter(
  (friends, index, array) => array.indexOf(friends) === index
 );
  return uniqueFriends;
};
// Change code above this line

// // -------------- --------- ---- ====***** ( Exercise ) #24 /////////////////////////////////////////////

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//    const usersFriendArray = users.filter((user) => user.friends.includes(friendName)); 
//   return usersFriendArray;
// };
// // Change code above this line

// // -------------- --------- ---- ====***** ( Exercise ) #23 /////////////////////////////////////////////

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
 
//   const usersAgeArray = users.filter((user) => user.age >= minAge && user.age <= maxAge); 
//   return usersAgeArray;

// };
// // Change code above this line

// // -------------- --------- ---- ====***** ( Exercise ) #22 /////////////////////////////////////////////

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

// const userName = users.filter((user) => user.eyeColor === color); 
//   return userName;

// };
// // Change code above this line

// // -------------- --------- ---- ====***** ( Exercise ) #21 /////////////////////////////////////////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// // -------------- --------- ---- ====***** ( Exercise ) #20 /////////////////////////////////////////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

// // -------------- --------- ---- ====***** ( Exercise ) #19 /////////////////////////////////////////////

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 != 0);

// // -------------- --------- ---- ====***** ( Exercise ) #17 /////////////////////////////////////////////

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames = users => {

//   return names = users.map(user => user.name);

// };
  
//   // Change code above this line

// // -------------- --------- ---- ====***** ( Exercise ) #16 /////////////////////////////////////////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// // -------------- --------- ---- ====***** ( Exercise ) #15 /////////////////////////////////////////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// // -------------- --------- ---- ====***** ( Exercise ) #14 /////////////////////////////////////////////

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);


// // -------------- --------- ---- ====***** ( Exercise ) #13 /////////////////////////////////////////////

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];  
//   numbers.forEach(element => {
//       if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else { 
//       newArray.push(element);
//     };
    
//   });
// return newArray;
//   // Change code above this line
// }

// // -------------- --------- ---- ====***** ( Exercise ) #11 /////////////////////////////////////////////

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #11 /////////////////////////////////////////////

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// // -------------- --------- ---- ====***** ( Exercise ) #10 /////////////////////////////////////////////

// // Change code below this line

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// // Change code above this line

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
//         console.log(onError);
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