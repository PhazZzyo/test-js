// "use strict";
// -------------- --------- ---- ====***** ( Exercise of blended lesson 29.01.2022 )

// Потрібно створити функцію яка буде приймати 1 параметр (масив юзерів) і серед
// них шукати Нарциса і повертати його імя(стрінгою) якщо в масиві немає Нарциса
// функція повертає пусту стрінгу, умова заключається в тому що НАРЦИС не знає нікого НАРЦИСА знають ВСІ

// нарцис  'Jhon'

const people_01 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];

// немає нарциса

const people_02 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];

// немає нарциса

const people_03 = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];

// немає нарциса

const people_04 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];

function findNarcissus(array) {
  console.dir(array);
  // console.log(`'initial array ${array}'`);
  const temp = [];
  let elName = "";
  array.forEach((element) => {
    if (element.know.length === 0) {
      elName = element.name;
      // console.log(`'suspect ${elName}'`);
    } else {
      temp.push(element);
      // console.log(`'Pushed element ${element.name}'`);
    }
    // console.log(`'temp array ${temp}'`);
  });
  if (temp.every((Object) => Object.know.includes(elName))) {
    console.log(`'Array ${array} have narcissus named ${elName}'`);
  } else {
    console.log(`'Array ${array} have no narcissus'`);
  }
}

findNarcissus(people_01);
findNarcissus(people_02);
findNarcissus(people_03);
findNarcissus(people_04);

// recycled
// console.log(`"checking ${element.name}"`);
// array.every((object) =>
//   // object.know.includes(element.name) && object.name !== element.name
//   console.log(`'object.know ${object.know}, object.name ${object.name}'`)
// );
// console.log(`'temp array ${temp}'`);

// -------------- --------- ---- ====***** ( Exercise of blended lesson 15.01.2022 )
// Create object with 3 keys: userName, cardName, total.
// Create 3 methods of object: balance, add, writeoff.

// const bank = {
//     userName: 'Alex',
//     cardName: 'Mono',
//     userTotal: 3000,

//     balance() {
//         console.log(`User ${this.userName} have balance: ${this.userTotal}`);
//     },

//     add(income) {
//         console.log(`User ${this.userName} add ${income} to card: ${this.cardName}, total:${this.userTotal += income}`);
//     },

//     total() {
//         console.log(`User ${this.userName} card ${this.cardName} balance is:${this.userTotal}`);
//     }
// }

// bank.balance();
// bank.add(1000);
// bank.total();

// const den = {
//     userName: 'Den',
//     cardName: 'Privat',
//     userTotal: 10000,
//   };

// bank.balance.call(den)
// bank.add.call(den, 2000)
// bank.add.apply(den, [1000])
// bank.total.call(den);

// ---=== new task ===---

// // перебрать масив
// // мутировать, щоб залишилися лише унікальні id
// // якщо однакові Id сплюсувати значення qty

// const products = [ {
//     id : 'sku1',
//     qty: 1,
// }, {
//     id : 'sku2',
//     qty: 2,
// }, {
//     id : 'sku3',
//     qty: 3,
// }, {
//     id : 'sku1',
//     qty: 6,
// }, {
//     id : 'sku1',
//     qty: 8,
// }, {
//     id : 'sku2',
//     qty: 19,
// }, {
//     id : 'sku4',
//     qty: 1,
//     }]

// for (let a = 0; a < products.length; a += 1) {
//     let element = products[a].id;
//     for (let b = a + 1; b < products.length; b += 1)
//         if (products[b].id === element) {
//             products[a].qty += products[b].qty;
//             products.splice(b, 1);
//             a -= 1;
//             }
// }
// console.log(products);

// -------------- --------- ---- ====***** ( Exercise of blended lesson 18.12.2021 )

// // sort latters in reverse alphabetical sorting

// const newArray = ['rabbit'];
// const mutedArray = newArray.join(' ').split('').sort().reverse().join('');
// console.log(`rabbit in reverse alphabetical sorting = ${mutedArray}`);

// // filter cars within price range

// const cars = [
//   { brand: "Audi", cost: 11000 },
//   { brand: "BMW", cost: 9000 },
//   { brand: "Honda", cost: 8000 },
//   { brand: "Tesla", cost: 40000 },
//   { brand: "VW", cost: 7000 },
// ];

// const minValue = Number(prompt("From"));
// let maxValue = Number(prompt("To"));

// if (maxValue === 0) {
//   maxValue = Infinity;
//  }
// // alternative
// // const filterCars = cars.filter(element => element.cost >= minValue && element.cost <= maxValue);
// // console.log(filterCars);

// const filterCars = cars.filter((element) => {
//   if (element.cost >= minValue && element.cost <= maxValue) {
//     return (element);
//   }
//   console.log(element);
// });
// console.log(filterCars);

// ----------------------------------------------------------------------

/* 1) Порахувати сумарний вік всіх користувачів, у которых есть ключ age */

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet", 'Harry Potter'], age: 26 },
//     { name: 'Denys', books: ["The Lord of the Rings", "War and peace", "The Shining"] },
//     { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
// ];

// const totalAge = friends.reduce((total, { age = 0 }) => total + age, 0)
// console.log(totalAge);

// alternative

// const totalAge = friends.reduce((total, friend) => {
//     console.log(!!friend.age);
//     if (!!friend.age) {
//         return total + friend.age
//     } else {
//         return total + 0
//     }
// }, 0)

// console.log(totalAge);

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"], age: 26},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]
// // Порахувати кількість книжок, у тих користувачів, у яких є книга "Harry Potter"
// // не використовуючи метод includes
// //console.log(~-4);
// //console.log(-1-(-4));
// //перевірити користувачів на наявність потрібної книги за допомогою indexOf()
// const searchBook = "Harry Potter";
// const totalBooks = friends.reduce((totalCountOfBooks, user) => {
//     //console.log(!!~user.books.indexOf(searchBook));
//     if (!!~user.books.indexOf(searchBook)){
//         totalCountOfBooks += user.books.length;
//     } else {
//         totalCountOfBooks += 0;
//     }
//     return totalCountOfBooks;
// }, 0);
// console.log (totalBooks);
// // якщо така книга є, то порахувати всі книжки

// -------------- --------- ---- ====***** ( Exercise of blended lesson 4.12.2021 )

// const all = ['apple', 'banana', 'tomato', 'potato', 'cucumber', 'orange', 'carrot', 'ananas'];
// const vegetables = ['tomato', 'potato', 'cucumber', 'carrot'];
// const fruits = [];

//   for (const element of all) {
//     if (!vegetables.includes(element)) {
//       fruits.push(element);
//     }
// }

//   console.log(`Fruits are: ${fruits}`);
