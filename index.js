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





// Exercise 17 Sum of Multiples of 3 and 5

// function sum(limit) {

//     let sum = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// sum(15);



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
//         console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
//       }
//     };
//   }

//   const person1 = createPerson("James", 30);
//   const person2 = createPerson("Anna", 25);

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

// Circle.apply({}, [1, 2, 3]); 

// Objects - 7 Value VS Reference Types


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

// Iterating all properties and methods and copy them to the new object.

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

// const another = Object.assign({}, circle); // Cloning all properties and methods from circle obj to 'another' obj.

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

// It depends on whether we are storing primitive and reference data types in an array.

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

// Solution 2                
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









