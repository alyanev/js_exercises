// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';

// // console.log(type);

// let highIncome = true;
// let goodCreditScore = false;
// let result = highIncome || goodCreditScore;

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = defaultColor || userColor;

// // console.log(currentColor);

// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;

// console.log(a)
// console.log(b);

// let hour = 12;

// if (hour >= 6 && hour < 12)
//     console.log('Good morning!');
// else if (hour >= 12 && hour < 18)
//     console.log('Good Afternoon!')
// else
//     console.log('Good evening!');

// switch case

// let role;

// switch (role) {
//     case 'guest':
//         console.log('Guest user');
//         break;

//         default: 
//         console.log('Unknown user');
// }


// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0)
//         console.log(i);
// }

// let i = 0;

// while (i <= 5) {
//     if (i % 2 !== 0)
//     console.log(i);
//     i++;

// }

// let i = 0;
// let isValid = true;
// do {
//     if (i >= 5) {
//         isValid = false;
//     }
//     console.log(i);
//     i++;
// } while (isValid);

// const person = {
//     name: 'Aleksandar',
//     age: 34
// }

// for (let key in person) {
//     console.log(key, person[key]);
// }


// for - in loop
// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//     console.log(index, colors[index]);
// }

// for - of loop
// const colors = ['red', 'green', 'blue'];

// for (let color of colors) {
//     console.log(color);
// }

// break and continue

// 10 Exercise 1 Max of Two Numbers

// Write a function that takes two numbers and returns the maximum of the two.

// function maxOfTwoNumbers(a, b) {
//     return (a > b) ? a : b;
// }

// let number = maxOfTwoNumbers(15, 14);
// console.log(number);

// maxOfTwoNumbers(12, 11);


// Exercise - 3 FizzBuzz

// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         return 'Not a number';
//     }

//     if (input % 3 === 0 && input % 5 === 0) {
//         return result = 'FizzBuzz';
//     } else if (input % 3 === 0) {
//         return result = 'Fizz';
//     } else if (input % 5 === 0) {
//         return result = 'Buzz';
//     } else if (input % 3 !== 0 && input % 5 !== 0) {
//         return input;
//     }


// }

// const output = fizzBuzz(5);
// console.log(output);


// Exercise 4 - Demerit Points

// function checkSpeed(speed) {

//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) {
//         console.log('License suspended');
//     } else {
//         console.log('Points', points);
//     }
// }

// checkSpeed(74);


// Exercise 17 Sum of Multiples of 3 and 5

// function sum(limit) {

//     let sum = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//             // if (i % 3 === 0) {
//             //     sum += i;
//             // }
//         }
//     }

//     console.log(sum);
// }

// sum(10);


// Exercise 18 Grade average

// function calculateAverage(array) {

//     let counter = 0;
//     let sum = 0;

//     for (let value of array) {
//         sum += value;
//         counter++;
//     }
//     return sum / array.length;
// }

// function averageMark(marks) {
//     const average = calculateAverage(marks);

//     if (average < 60) {
//         return 'F';
//     } else if (average <= 69) {
//         return 'D';
//     } else if (average <= 79) {
//         return 'C';
//     } else if ((average <= 89)) {
//         return 'B';
//     } else if (average <= 100) {
//         return 'A';
//     }
// }

// const marks = [110, 80, 50];
// console.log(averageMark(marks));


// Exercise 19 - Stars

// function showStars(rows) {

//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }

// showStars(5);


// Exercise 20 Prime Numbers



// function showPrimes(limit) {

//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) {
//             console.log(number);
//         }
//     }
// }

// function isPrime(number) {

//     for (let factor = 2; factor < number; factor++) {
//         if (number % factor === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// showPrimes(20);


//////////////// Objects ////////////////

// 1 Basics

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };


// 2 Factory Functions

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }



// const cicrle1 = createCircle(1);
// console.log(cicrle1);

// const cicrle2 = createCircle(2);
// console.log(cicrle2);



// function createPerson(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Здравей, аз съм ${this.name} и съм на ${this.age} години.`);
//       }
//     };
//   }

//   const person1 = createPerson("Иван", 30);
//   const person2 = createPerson("Мария", 25);

//   person1.greet();
//   person2.greet();


// 3 Constructor Functions

// Uses Pascal Notation

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// 4 Dynamic Nature of Objects

// const circle = {
//     radius: 1
// };

// circle.color = 'red';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle.constructor);


// 6 Functions ARE Objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Cicrle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `);

// const circle = new Cicrle1(1);  -> This is an object.

// Circle.call({}, 1);  === const another = new Circle(1);

// Circle.apply({}, [1, 2, 3]); // Така можеш да подадем на съществуващия обект допълнителен аргумент, който е масив.

// Objects - 7 Value VS Reference Types

// Обекти и масиви: Когато ги копираш, създаваш референция към оригиналния обект.
// Промените в копието ще се отразят и на оригинала.

// Примитивни стойности (Number, String, Boolean и др.): Когато ги копираш, създаваш истинско копие на стойността.
// Промените в копието няма да се отразят на оригиналната стойност.


// let x = 10;
// let y = x;
// x = 20;

// let ax = { value: 10 };
// let ay = ax;

// ax.value = 20; // ay = 20; REFERENCE

// let number = 10;

// function increase(number) {
//     number++;
// }

// increase(number);
// console.log(number); // number = 10


// let obj = { value: 10 };

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj); // value = 11;


// Objects - 8 Enumeration Properties of an Object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle) {            // The easiest way to enumarate methods and properties from an object
//     console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)) { // Enumerate only the keys
//     console.log(key);
// }

// for (let entry of Object.entries(circle)) { // Enumerate keys and values like an array
//     console.log(entry);
// }


// if ('radius' in circle) console.log('yes');



// Object - 9 Cloning an object

// Shte iterirame wsichki property i methodi i shte to kopirame v noviqt object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const anotherCircleObject = {};

// for (let key in circle) {
//     anotherCircleObject[key] = circle[key];
// }

// const another = Object.assign({}, circle); // клонира всички свойства и методи от circle object в новия обкет another.

// const anotherObject = { ...circle};
// console.log(anotherObject);


// Objects - 11 Math

// Object - 12 String

// String primitive
// const message = 'This is my first message';

// // String object
// const another = new String('hi');

// console.log(message.length);
// console.log(message[0]);
// console.log(message.includes('my'));
// console.log(message.includes('not'));
// console.log(message.startsWith('This'));
// console.log(message.startsWith('this'));
// console.log(message.endsWith('e'));
// console.log(message.indexOf('my'));
// console.log(message.replace('first', 'second'));
// console.log(message);
// console.log(message.replace('first', 'second').toLocaleUpperCase());
// console.log(message.trimLeft);



// Objects 13 - Template Literals

// // String primitive
// const message =
//     'This is my \n' +
//     '\'first\' message';

// // Object {}
// // Boolean true, false
// // String '', ""
// // Template ``

// const names = 'John';
// const another =
//     `Hi ${names}, ${2 + 3}

// Thank you for joining my mailing list.

// Regards,
// Mosh`;


// console.log(another);

// Objects 14 - Date

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(1940);

// console.log(now);



// Objects 15 - Exercise 1 Address Object

// const address1 = {
// street: 'Yavorov',
// city: 'Veliko Tarnovo',
// zipCode: '5000'
// };

// function showAddress(address1) {

//     for (let key in address1) {
//         console.log(`${key}: ${address1[key]}`);
//     }
// }
// for (let key of Object.keys(address)) {
//     console.log(`${key}: ${address[key]}`);
// }
// }

// showAddress(address1);

// Objects 16 - Exercise Factory and Constructor functions, create objects

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// function CreateAddressConstr(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address = new CreateAddressConstr('Yavorov', 'Veliko Tarnovo', 5000);

// console.log(address);

// let factoryAddress = createAddress('Yavorov', 'Veliko Tarnovo', 5000);

// console.log(factoryAddress);


// Objects 17 - Exercise Object Equality

// function CreateAddressConstr(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address1 = new CreateAddressConstr('Yavorov', 'Veliko Tarnovo', 5000);
// let address2 = new CreateAddressConstr('Yavorov', 'Veliko Tarnovo', 5000);
// let address3 = address1;

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipCode === address2.zipCode;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));


// Objects 18 - Exercise 4 Blog Post Object

// let blogPost = {
//     title: 'MyPost',
//     body: 'MyParagraphs',
//     author: 'Aleksandar',
//     views: 50,
//     comments: [
//         { author: 'A', body: 'Some text in body' },
//         { author: 'c', body: 'e' }
//     ],
//     isLive: true
// };

// console.log(blogPost);

// Objects 19 - Exercise 5 Constructor Functions - Create a blog engine

// function Post(title, body, author) {
//     this.title = title,
//     this.body = body;
//     this.author = author,
//     this.views = 0;
//     this.comments = [],
//     this.isLive = false
// }

// let post = new Post('MyFirstPost', 'Sharing some text here', 'AY');
// console.log(post);


// Objects 20 - Exercise 6 - Price Range Object

// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPricePerPerson: 0, maxPricePerPerson: 10 },
//     { label: '$', tooltip: 'Moderate', minPricePerPerson: 11, maxPricePerPerson: 20 },
//     { label: '$', tooltip: 'Expensive', minPricePerPerson: 21, maxPricePerPerson: 50 }
// ];

// let restaurants = [
//     { averagePerPerson: 5 },
// ];






/////////////////// Arrays /////////////////


// 2 Adding Elements

// const numbers = [3, 4];

// // End
// numbers.push(5, 6);


// // Beginning
// numbers.unshift(1, 2);

// // Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);



// 3 Finding Elements (Primitive Types)

// Зависи дали запазване примитивни или референтни типове данни в масив

// Primitives

// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1)); // --> 0 This is the index of the element.
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1, 2));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));


// 4 Finding Elements Rerefence Types

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const courseFindTheFirstObjectThatMatches = courses.find(function (element) {
//     return element.name === 'a';
// });

// const courseFindTheFirstIndexThatMatches = courses.findIndex(function (element) {
//     return element.name === 'a';
// });

// console.log(courseFindTheFirstObjectThatMatches);
// console.log(courseFindTheFirstIndexThatMatches);



// 5 Arrow Functions

// const courseFindTheFirstIndexThatMatches = courses.findIndex(element => element.name === 'a');


// 6 Removing Elements

// const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(`The last element was ${last}`);

// Begining
// const first = numbers.shift();
// console.log(numbers);
// console.log(`The first element was ${first}`);

// Middle
// const middle = numbers.splice(2, 1);
// console.log(numbers);
// console.log(`The first element was ${middle}`);


// 7 Emptying an Array

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];
// console.log(another);

// Solution 2                  // THe best solution
// numbers.length = 0;
// console.log(numbers);
// console.log(another);

// Solution 3
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(another);

// Solution 4
// while (numbers.length > 0){
//     numbers.pop();
// }
// console.log(numbers);
// console.log(another);


// 8 Combining and Slicing Arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const slice = combined.slice(2, 4);

// console.log(combined);
// console.log(slice);

// const combinedSpread = [...first, 'a', ...second, 'b'];
// const copyOfCominedArray = combinedSpread;


// console.log(copyOfCominedArray);
// console.log(slice);


// 10 Iterating an Array

// const numbers = [1, 2, 3];

// for (let number of numbers) {
//     console.log(number);
// }

// for (let index in numbers) {
//     console.log(index);
// }

// numbers.forEach(function (number, index) {
//     console.log(index, number);
// });



// 11 Joining Arrays

// const numbers = [1, 2, 3];

// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const joinedParts = parts.join(' ');
// console.log(joinedParts);


// 12 Sorting Arrays

// const numbers = [3, 2, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'Javascript' },
// ];

// courses.sort(function (a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);


// 13 Testing the Elements of an Array

// const numbers = [1, 2, 3, -3];

// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// })

// console.log(allPositive);

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// })

// console.log(atLeastOnePositive);


// 14 - Filtering an Array


// const numbers = [1, 2, 3, -3];

// const filtered = numbers.filter(function (value) {
//     return value >= 0;
// });

// console.log(filtered);

// const filteredUsingArrowFunction = numbers.filter(value => value <= 0);

// console.log(filteredUsingArrowFunction);


// 15 Mapping an Array

// const numbers = [1, 2, 3, -3];

// const filtered = numbers.filter(function (value) {
//     return value >= 0;
// });

// maping the array to html form
// const items = filtered.map(value => '<li>' + value + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

// maping the array to objects
// const itemsToObjects = numbers
//     .filter(function (value) {
//         return value >= 0;
//     })
//     .map(value => {
//         return { value: value }
//     })
//     .filter(function (obj) {
//         return obj.value > 1;
//     })
//     .map(function (obj) {
//         return obj.value;
//     });

// console.log(itemsToObjects);


// 16 Reducing an Array

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);


// same but with reduce method for arrays

// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);


// 17 - Exercise 1 - Array from Range

// const numbers = arrayFromRange(1, 5);

// function arrayFromRange(min, max) {

//     const output = [];
//     for (let n = min; n <= max; n++) {
//         output.push(n);
//     }

//     return output;
// }

// console.log(numbers);


// 18 - Exercise - Includes

// const numbers = [1, 2, 3, 4, 'w'];

// function includes(array, searchElement) {

//     // for (let i = 0; i < array.length; i++) {
//     //     if (array[i] === searchElement) {
//     //         return true;
//     //     }
//     // }
//     // return false;

//     for (let element of array) {
//         if (element === searchElement) {
//             return true;
//         }
//     }
//     return false;

// }

// console.log(includes(numbers, 4));



// 19 - Exercise 3 - Except an Element



// const numbers = [1, 2, 1, 3, 4, 1, 1];

// const output = except(numbers, [1, 2]);

// function except(array, excluded) {

//     // const diff = [];
//     // for (let i = 0; i < array.length; i++) {
//     //     if (!excluded.includes(array[i])) {
//     //        diff.push(array[i]);
//     //     }
//     // }
//     // return diff;

//     // const output = [];
//     // for (let element of array) {
//     //     if (!excluded.includes(element)) {
//     //         output.push(element);
//     //     }
//     // }
//     // return output;

//     // const difference = array.filter(element => !excluded.includes(element));
//     // return difference;

//     // const a = array.every((value, index) => value === !excluded[index]);
//     // return a;

// }

// console.log(output);



// 20 - Exercise 4 - Moving an Element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset) {


//     const position = index + offset;

//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return array;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;

// }


// 21 Exercise - Count Occurrences


// function countOccurrences(array, searchElement) {
// first solution

// let counter = 0;

// for (let key of array) {
//     if (key === searchElement) {
//         counter++
//     }
// }

// return counter;

// sec solution

// const sum = array.reduce((accumulator, current) => {
//     if (current === searchElement) {
//         accumulator++;
//     }
//     return accumulator;
// }, 0);

// return sum;

// third solution най-доброто решение

//     return array.reduce((accumulator, current) => {
//         const occerrence = (current === searchElement) ? 1 : 0;
//         return accumulator + occerrence;
//     }, 0);
// }

// const numbers = [1, 2, 3, 4, 3, 5, 3];

// const count = countOccurrences(numbers, -1);

// console.log(count);



// const numbers = [1, 2, 3, 4, 5];

// const times = numbers.map(numbers => {
//     return numbers * 2;
// });

// const filter = numbers.filter(value => value > 3);

// console.log(filter);

// const sum = numbers.reduce((acc, current) => acc + current);

// console.log(sum);


//              AI Exercises          //


// function timesTo(array, time) {

//     const times = array.map(item => item * time);
//     return times;
// }

// const numbers = [1, 2, 3, 4, 5];

// const mapped = timesTo([1, 2, 3], 5);


// const reduced = mapped.reduce((acc, curr) => (curr + acc));

// console.log(mapped);
// console.log(reduced);
// console.log(numbers.some(n => n >= 5));


// const filtered = numbers.filter(n => n > 2);
// const maped = filtered.map(n => n + 1);

// console.log(maped);

// const products = [
//     { name: 'Apple', price: 50 },
//     { name: 'Banana', price: 20 },
//     { name: 'Laptop', price: 200 },
// ];

// const total = products.reduce((acc, product) => acc + product.price, 0)
// console.log(total);

// const hasPriceMoreThanHundred = products.some(product => product.price > 100);

// console.log(hasPriceMoreThanHundred);

// const productNames = products.reduce((acc, product) => {
//     acc.push(product.name);
//     return acc;
//   }, []); // Начална стойност е празен масив

//   console.log(productNames); // ['Apple', 'Banana', 'Laptop']


///////////// L2

// 1

// const products = [
//     { name: 'Apple', price: 2, quantity: 10 },
//     { name: 'Banana', price: 1.5, quantity: 20 },
//     { name: 'Orange', price: 3, quantity: 15 },
// ];


// const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
// const productPrices = products.map(product => product.price * product.quantity);

// console.log(totalPrice);

// 2

// const products = [
//   { name: 'Apple', price: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 1, quantity: 15, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
//   { name: 'Lettuce', price: 1.2, quantity: 10, category: 'vegetable' },
// ];


// const totalProductPrice = products
//   .filter(product => product.category === 'fruit')
//   .reduce((acc, product) => acc + product.price * product.quantity, 0);


// const fruits = products.filter(product => product.category === 'fruit');
// const fruitNames = fruits.map(fruit => fruit.name);
// const totalPrice = fruits.reduce((acc, product) => acc + product.price * product.quantity, 0);

// console.log(totalProductPrice);

// 3

// const products = [
//   { name: 'Apple', price: 2, category: 'fruit' },
//   { name: 'Banana', price: 1.5, category: 'fruit' },
//   { name: 'Carrot', price: 1, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, category: 'fruit' },
// ];

// const vegetables = products.filter(product => product.category === 'vegetable');
// const productAndPrice = vegetables.map(product => (product.name + '-' + product.price));
// const priceBiggerThanTwo = vegetables.some(product => product.price > 2);

// console.log(productAndPrice);


// 4


// const products = [
//   { name: 'Apple', price: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 1, quantity: 5, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, quantity: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
// ];

// const lowPriced = products.filter(product => product.price <= 2)
// const names = lowPriced.map(product => product.name);
// const quantity = lowPriced.every(product => product.quantity > 5);

// console.log(quantity);


// 5

// const products = [
//   { name: 'Apple', price: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 1, quantity: 5, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, quantity: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
// ];

// const fruits = products.filter(product => product.category === 'fruit');
// const fruitPrice = fruits.map(fruit => fruit.price * fruit.quantity);
// const totalPrice = fruitPrice.reduce((acc, fruit) => acc + fruit, 0);

// console.log(totalPrice);


// 6

// const products = [
//   { name: 'Apple', price: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 3, quantity: 5, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, quantity: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
// ];

// const pricedAboveTwo = products.filter(product => product.price > 2);
// const quantityLowThanFive = pricedAboveTwo.some(product => product.quantity < 5);
// const everyIsFruit = pricedAboveTwo.every(product => product.category === 'fruit');


// 7

// const products = [
//   { name: 'Apple', price: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 1, quantity: 5, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, quantity: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
// ];

// const quantity = products.filter(product => product.category === 'fruit' && product.quantity > 10);
// const names = quantity.map(product => product.name);
// const total = quantity.reduce((acc, product) => acc + product.price * product.quantity, 0);

// console.log(total);

// 1

// Какво би се случило, ако трябва да групираш не по категория, а по цена или количество?

// Можеш ли да добавиш и допълнителна логика, например, да филтрираш само продуктите с цена над определена стойност, преди да ги групираш?

// const products = [
//   { name: 'Apple', quantity: 2, quantity: 10, category: 'fruit' },
//   { name: 'Banana', price: 1.5, quantity: 20, category: 'fruit' },
//   { name: 'Carrot', price: 1, quantity: 5, category: 'vegetable' },
//   { name: 'Broccoli', price: 3, quantity: 3, category: 'vegetable' },
//   { name: 'Orange', price: 3, quantity: 15, category: 'fruit' },
//   { name: 'Potato', price: 0.5, quantity: 25, category: 'vegetable' }
// ];

// const filteredProducts = products.filter(product => product.quantity > 5);

// const productsByCategory = filteredProducts.reduce((acc, product) => {
//   if (!acc[product.quantity]) {
//     acc[product.quantity] = [];
//   }
//   acc[product.quantity].push(product);
//   return acc;
// }, {});

// console.log(productsByCategory);

// 2

// const products = [
//   { name: "apple", price: 3, category: "fruit", quantity: 10 },
//   { name: "banana", price: 2, category: "fruit", quantity: 5 },
//   { name: "carrot", price: 4, category: "vegetable", quantity: 12 },
//   { name: "broccoli", price: 6, category: "vegetable", quantity: 7 },
//   { name: "cherry", price: 8, category: "fruit", quantity: 3 }
// ];


// const priceAboveFive = products.filter(product => product.price > 5);
// const productName = priceAboveFive.map(product => product.name);
// const total = priceAboveFive.reduce((acc, product) => acc + product.price * product.quantity, 0);

// 3

// const products = [
//   { name: "apple", price: 3, category: "fruit", quantity: 10 },
//   { name: "banana", price: 2, category: "fruit", quantity: 5 },
//   { name: "carrot", price: 4, category: "vegetable", quantity: 12 },
//   { name: "broccoli", price: 6, category: "vegetable", quantity: 7 },
//   { name: "cherry", price: 8, category: "fruit", quantity: 3 }
// ];

// const fruits = products.filter(product => product.category === 'fruit');

// const productsByCategory = fruits.reduce((acc, product) => {
//   const productWithTotal = {
//     name: product.name,
//     totalPrice: product.price * product.quantity
//   };
//   acc.push(productWithTotal);
//   return acc;
// }, []);

// console.log(productsByCategory);

// 1 Reduce

// const products = [
//   { name: "apple", price: 3, category: "fruit" },
//   { name: "banana", price: 2, category: "fruit" },
//   { name: "carrot", price: 4, category: "vegetable" },
//   { name: "broccoli", price: 6, category: "vegetable" },
//   { name: "cherry", price: 8, category: "fruit" }
// ];

// const avgPrice = products.reduce((acc, obj) => acc + obj.price, 0) / products.length;

// console.log(avgPrice);

// 2 Reduce

// const products = [
//   { name: "apple", price: 3 },
//   { name: "banana", price: 2 },
//   { name: "carrot", price: 4 },
//   { name: "broccoli", price: 6 },
//   { name: "cherry", price: 8 }
// ];

// const prices = products.reduce((acc, obj) => {
//   acc.push(obj.price);
//   return acc;
// }, []);

// const usingMap = products.map(object => object.price);

// console.log(prices);
// console.log(usingMap);

// 3 redude

// const products = [
//   { name: "apple", category: "fruit", quantity: 10 },
//   { name: "banana", category: "fruit", quantity: 5 },
//   { name: "carrot", category: "vegetable", quantity: 12 },
//   { name: "broccoli", category: "vegetable", quantity: 7 },
//   { name: "cherry", category: "fruit", quantity: 3 }
// ];

// const fruits = products.filter(product => product.category === 'fruit');
// const totalFruitQuantity = fruits.reduce((acc, obj) => acc + obj.quantity, 0);

// const tFruitQuantity = products
//   .filter(product => product.category === 'fruit')
//   .reduce((acc, obj) => acc + obj.quantity, 0);

// console.log(tFruitQuantity);

// 4 reduce

// const products = [
//   { name: "apple", category: "fruit" },
//   { name: "banana", category: "fruit" },
//   { name: "carrot", category: "vegetable" },
//   { name: "broccoli", category: "vegetable" },
//   { name: "cherry", category: "fruit" }
// ];

// const productsByCategory = products.reduce((acc, obj) => {

//   if (!acc[obj.category]) {
//     acc[obj.category] = [];
//   }
//   acc[obj.category].push(obj);
//   return acc;

// }, {});

// 5 reduce

// const products = [
//   { name: "apple", price: 3 },
//   { name: "banana", price: 2 },
//   { name: "carrot", price: 3 },
//   { name: "broccoli", price: 4 },
//   { name: "cherry", price: 2 },
//   { name: "orange", price: 3 }
// ];

// const productsByPrice = products.reduce((acc, product) => {
//   if (!acc[product.price]) {
//     acc[product.price] = [];
//   }
//   acc[product.price].push(product);
//   return acc;
// }, {});

// console.log(productsByPrice);

// 6 reduce

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 34 },
//   { name: "David", age: 42 },
//   { name: "Eve", age: 60 },
//   { name: "Frank", age: 29 },
//   { name: "Grace", age: 15 }
// ];

// const peopleByAge = people.reduce((acc, person) => {
//   let ageGroup;
//   if (person.age > 0 && person.age <= 18) {
//     ageGroup = '0-18';
//   } else if (person.age >= 19 && person.age <= 30) {
//     ageGroup = '19-30';
//   } else if (person.age >= 31 && person.age <= 50) {
//     ageGroup = '31-50';
//   } else {
//     ageGroup = '51+';
//   }

//   if (!acc[ageGroup]) {
//     acc[ageGroup] = [];
//   }

//   acc[ageGroup].push(person);
//   return acc;
// }, {});

// console.log(peopleByAge);


// 7 reduce

// const products = [
//   { name: "apple", price: 5 },
//   { name: "banana", price: 2 },
//   { name: "carrot", price: 15 },
//   { name: "broccoli", price: 8 },
//   { name: "steak", price: 60 },
//   { name: "orange", price: 12 }
// ];

// const productsByPriceGroup = products.reduce((acc, product) => {
//   let priceGroup = '';
//   if (product.price >= 0 && product.price <= 10) {
//     priceGroup = '0-10';
//   } else if (product.price >= 11 && product.price <= 20) {
//     priceGroup = '11-20';
//   } else if (product.price >= 21 && product.price <= 50) {
//     priceGroup = '21-50';
//   } else {
//     priceGroup = '50+';
//   }

//   if (!acc[priceGroup]) {
//     acc[priceGroup] = [];
//   }

//   acc[priceGroup].push(product);
//   return acc;
// }, {});

// console.log(productsByPriceGroup);

// 1 reduce

//Задача 1: Групиране на хора по начална буква на името

// Имаш масив от хора.
//  Всеки човек има име и възраст.
//  Използвай reduce, за да групираш хората по първата буква от тяхното име.
//  Резултатът трябва да е обект, в който всяка ключова стойност е първата буква на името, а стойността е масив от хора, чиито имена започват с тази буква.

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Anna", age: 22 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 40 },
//   { name: "Diana", age: 27 }
// ];

// const peopleAlphabetic = people.reduce((acc, person) => {
//   if (!acc[person.name.charAt(0)]) {
//     acc[person.name.charAt(0)] = [];
//   }
//   acc[person.name.charAt(0)].push(person);

//   return acc;
// }, {});

// console.log(peopleAlphabetic);


// 2 reduce

// const people = [
//   { name: "Alice" },
//   { name: "Bob" },
//   { name: "Charlie" },
//   { name: "David" }
// ];


// const names = people.reduce((acc, person) => {

//   acc.push(person.name);
//   return acc;
// }, []);

// console.log(names);
