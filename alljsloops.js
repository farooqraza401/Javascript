// for loop-
// // In JavaScript, A for loop is used to repeat a block of code a specific number of times.
// //It is one of the most common control structures in programming.

// //Syntax
// // for (initialization; condition; increment / decrement) {
// // Code to execute repeatedly
// // }

// // Example 1: Simple Counting
// for (let i = 1; i <= 5; i++) {
//   console.log(i); // Output:  1, 2, 3, 4,5
// }

// // Example 2: Iterating Backwards
// for (let i = 5; i > 0; i--) {
//   console.log(i); // Output: 5, 4, 3, 2, 1
// }

// //Example 3: Iterating Over an Array
//const fruits1 = ["apple", "banana", "cherry"];
//console.log(fruits1.length);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits1[i]);
// }
// // Output:
// // apple
// // banana
// // cherry

//practice
//Iterating Forwards 1 to 10
for (let i = 0; i <= 10; i++) {
  // console.log(i)
}

//Iterating Backwards 10 to 1
for (let i = 10; i > 0; i--) {
  //console.log(i)
}

// Iterating Over an Array
const arr = [
  "shamshad",
  "asmat",
  "khalida",
  "shahida",
  "fatima",
  "farooq",
  "siddiq",
  "amber",
];

for (let i = 0; i < arr.length; i++) {
  //console.log(i) // 0-7
  //console.log(arr[i]) // shamshad asmat khalida shahida fatima farooq siddiq amber
}

// Examples of Iterating Over an Object Using a for Loop

//1. Using Object.keys()
//The Object.keys() method returns an array of an object's keys. we can iterate through them using a for loop.

const person = {
  name: "farooq",
  age: 27,
  city: "Budaun",
};

const keyss = Object.keys(person);
//console.log(keyss) // [ 'name', 'age', 'city' ]  'Object.keys() method returns an array of an object's keys'
// for (let i = 0; i < keyss.length; i++) {
//   console.log(`${keyss[i]}:${person[keyss[i]]}`);
// }

//2. Using Object.values()
//The Object.values() method returns an array of an object's values.

const person1 = {
  name: "siddiq",
  age: 25,
  city: "Budaun",
};

const values = Object.values(person1);
//console.log(values) // [ 'siddiq', 25, 'Budaun' ]  'Object.values() method returns an array of an object's values'
for (let i = 0; i < values.length; i++) {
  //console.log(values[i]);
}

//3. Using Object.entries()
//The Object.entries() method returns an array of an object's key-value pairs as nested arrays.

const person2 = {
  name: "amber",
  age: 22,
  city: "Budaun",
};

const entries = Object.entries(person2);
//console.log(entries); //[ [ 'name', 'amber' ], [ 'age', 22 ], [ 'city', 'Budaun' ] ] 'Object.entries() method returns an array of an object's key-value pairs as nested arrays'
for (let i = 0; i < entries.length; i++) {
  //console.log(`${entries[i][0]}:${entries[i][1]}`) // return both key and value
  //console.log(`${entries[i][1]}`) // return values only
}

// A for loop operates on iterable structures like arrays.
// Objects in JavaScript are not directly iterable.
// To iterate over an object, you need to extract its keys, values, or entries into an iterable form
// using methods like Object.keys(), Object.values(), or Object.entries().

// Q.why Objects in JavaScript are not directly iterable.
// Ans1
// //Because they are not designed to be inherently sequential or ordered data structures like arrays, strings,
// or other iterable objects. Instead, objects are collections of key-value pairs,
// and their primary purpose is to store and retrieve data by keys.

// Here are the key reasons why objects are not directly iterable:

// Ans2
// Iteration is meaningful for data structures that have a well-defined order, like arrays or strings.
// Objects, however, are designed to hold unordered key-value pairs.
// While modern JavaScript engines maintain the insertion order for object properties,

//5. Workarounds for Iterating Over Objects
// Even though objects are not directly iterable, you can iterate over their properties using:
// for...in: Iterates over enumerable properties.
// Object.keys(): Returns an array of keys.
// Object.values(): Returns an array of values.
// Object.entries(): Returns an array of key-value pairs.
//-------------------------------------------------------------------------------------------

// for...in:
// for...in Loop:
// for...in Loop is generally used for objects
// The for...in loop iterates over the indexes (or keys) of an object.
// Since arrays are just objects with numeric keys (indexes),
// for...in will loop over those indexes.

// const arrr = [1, 2, 3, 4];

// console.log(typeof arr); // return object

// for (let elem in arrr) {
//   //console.log(elem);
// }

// Explanation
// The array arrz is defined as [1, 2, 3, 4],
// which means it has four elements at indexes 0, 1, 2, and 3.

// for...in Loop:
// The for...in loop iterates over the indexes (or keys) of an object.
// Since arrays are just objects with numeric keys (indexes),
// for...in will loop over those indexes.

// for...of Loop
// for...of iterates over the values of arrays. For arrays,
// for...of is the preferred loop to access the values directly

// 1. Using an Array
// we can create an array of numbers and use for...in to iterate over its indexes.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const index in numbers) {
//   console.log(numbers[index]); // Prints 1 to 10
// }

// for (const abc in numbers) {
//   //console.log(abc) // 0 1 2 3 4 5 6 7 8 9
//   //console.log(numbers[abc]); //  1 2 3 4 5 6 7 8 9 10
// }

//2. Using an Object
// we can create an object where the keys represent the indexes and the values represent the numbers 1 to 10.

const numberOBJ = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  10: 11,
};

// for (const key in numberOBJ) {
//   console.log(numberOBJ[key]); //  1 2 3 4 5 6 7 8 9 10 11
// }

//===========================

// Using a for loop
// for (let i = 1; i <= 17; i++) {
//   //console.log(i);
// }

// Using a for...of loop on an array

// const numArr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]
// for (const num of numArr) {
//   //console.log(num);
// }

////=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=----------------------------------

// Arrays:

// What is an array in JavaScript?
// An array is a special type of object used to store multiple values in a single variable.
// Arrays can hold any combination of data types, including numbers, strings, objects, and even other arrays.

// How do you create an array?

// You can create an array using the array literal syntax or the Array constructor.

// The array literal syntax uses square brackets to enclose a comma-separated list of values.
// Example:

// What is the Array constructor?
// The Array constructor creates an array by using the new Array() syntax.
// Example: const fruits = new Array(“apple”, “banana”, “cherry”);

// Basic Operations on JavaScript Arrays

// 1. Accessing Elements of an Array
// Any element in the array can be accessed using the index number.
let a = ["HTML", "CSS", "JS"];
//console.log(a);

// Accessing Array Elements
//console.log(a[0]); // HTML
//console.log(a[1]); // CSS
//-----------------------------
// 2. Accessing the First Element of an Array
//let fst = a[0];
//console.log("First Element of the array", fst); // First Element of the array HTML
//-----------------------------
// 3. Accessing the Last Element of an Array
// Accessing Last Array Elements
//let lst = a[a.length -1];
//console.log("First Item: ", lst); // JS
//-----------------------------
//4. Modifying the Array Elements
//Elements in an array can be modified by assigning a new value to their corresponding index.
a[1] = "Bootstrap";
//console.log(a); // [ 'HTML', 'Bootstrap', 'JS' ]
//-----------------------------
// 5. Adding Elements to the Array
//Elements can be added to the array using methods like push() and unshift().

//The push() method add the element to the end of the array.
//The unshift() method add the element to the starting of the array.

// Creating an Array and Initializing with Values
let b = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
//b.push("Node.js");

// Add Element to the beginning
//b.unshift("Web Development");

//console.log(b); // [ 'Web Development', 'HTML', 'CSS', 'JS', 'Node.js' ]
//-----------------------------------
//6. Removing Elements from an Array
//To remove the elements from an array we have different methods like pop(), shift(), or splice().

//The pop() method removes an element from the last index of the array.
//The shift() method removes the element from the first index of the array.
//The splice() method removes or replaces the element from the array.

let c = ["HTML", "CSS", "JS"];
//console.log("Original Array: " + c); // HTML,CSS,JS
//console.log("Original Array: ", c);  // [ 'HTML', 'CSS', 'JS' ]

// Removes and returns the last element
//let lst = c.pop();
//console.log(lst) // JS
//console.log("After Removing the last: ",c);

// Removes and returns the first element
//let fst = c.shift();
//console.log(fst) // HTML
//console.log("After Removing the First: " ,c);

// Removes 2 elements starting from index 1
//c.splice(1, 2);
//console.log("After Removing 2 elements starting from index 1:" +c)

// EX
const fruits = ["apple", "mango", "banana", "guava"]; // create an array by using the array literal

//Accessing the First,second Element of an Array
const fst = fruits[0];
const scnd = fruits[1];
//console.log(fst,scnd)
//Accessing the last Element of an Array
const last = fruits[fruits.length - 1];
//console.log(last)

//Modifying the Array Elements
//can be modified by assigning a new value to their corresponding index.
fruits[3] = "graps";
//console.log(fruits)

// EX
const alpha = new Array("abc", "def", "ghi", "jkl", "mno", "pqr"); //creates an array by using the new Array() or using the Array constructor.

//Aaccess the first two elements of the alpha array
// 1. Using Indexes:
// we can directly access the first two elements using their indexes:
//console.log(alpha)
//console.log(alpha[0])
//console.log(alpha[1])

// 2. Using slice():
//The slice() method returns a shallow copy of a portion of the array.
// Use it to extract the first two elements:
//const firstTwo = alpha.slice(0,2) //Excluding 2 and returns a shallow copy of a portion of the array
//console.log(firstTwo)

//3. Using Destructuring:
//Array destructuring allows you to extract specific elements into variables:
//const [first,second]=alpha
//console.log(first,second)

//4. Using for Loop:
//Iterate over the array and stop after the first two elements:
for (let i = 0; i < 2; i++) {
  //console.log(alpha[i])
}

//5. Using forEach():
//Limit the iteration to the first two elements:

//forEach()
//forEach() is used to iterate over each element of an array
//and execute a provided function once for each array element

// alpha.forEach((val,index)=>{
//   if(index<4){
//     console.log(val)
//   }
// })
// Explanation of above forEach()
//1. const alpha = new Array('abc', 'def', 'ghi', 'jkl', 'mno', 'pqr');
//What Happens Here:

//A new array is created using the Array constructor.
//The array is assigned to the constant variable alpha.
//The array alpha contains six string elements: 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'.

//2. alpha.forEach((value, index) => { ... });
//What Happens Here:
//The forEach method is called on the alpha array.
//forEach is used to iterate over each element in the array.
//The callback function (value, index) => { ... } is executed once for each element in the array.
//value represents the current element (e.g., 'abc', 'def').
//index represents the index of the current element (e.g., 0, 1).

// Another Example of foreEach()
// const numberss = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num);
// });
// Output:
// 1
// 2
// 3
// 4
// 5

//console.log(alpha[0])
//console.log(alpha[alpha.length-1])
//console.log(alpha) // [ 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr' ]
// alpha[2]='xxyyzz'
//console.log(alpha) // [ 'abc', 'def', 'xxyyzz', 'jkl', 'mno', 'pqr' ]

//console.log(alpha.slice(2,4)) // excluding 4

//console.log(alpha.pop()) // return last element of the array 'pqr'
//console.log(alpha) // [ 'abc', 'def', 'xxyyzz', 'jkl', 'mno']

// const addEleminLst = alpha.push('mno')
//const gg = alpha.push('bnmvc')
//console.log(gg)  //It returns the new length of the array after the elements are added.
//console.log(alpha) // [ 'abc', 'def', 'xxyyzz', 'jkl', 'mno','bnmvc']
//----------------

// while loop

const empArr = ["siddiq", "chandar", "rehman", "amber", "arnav", "shubh"];
//console.log('using while')
let i = 0;
while (i < empArr.length) {
  //console.log(empArr[i])
  i++;
}

//console.log('using do while')
let j = 0;
do {
  //console.log(empArr[j])
  j++;
} while (j < empArr.length);

//let i = 1;
// while (i < 3) {
//   console.log("Number:", i);
//   i++;
// }

// while(i < 10){
//   console.log('Number:', i)
//   i++
// }

//-------
// do-while loop

//let j=0
// do{
//   console.log('Number:',j)
//   j++
// }while(j<5)

//Q A function to iterate to an array using for ,while,do while,for of, for in loops

const number = [30, 40, 50, 60, 70];

function iterateArray(arr) {
  //console.log("using for:");
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
  }

  //console.log("using while:");
  let j = 0;
  while (j < arr.length) {
    //console.log(arr[j]);
    j++;
  }

  //console.log("using while:");
  let k = 0;
  do {
    //console.log(arr[k]);
    k++;
  } while (k < arr.length);

  //console.log("using for in:");
  for (let val in arr) {
    //console.log(arr[val]);
  }

  //console.log("using for of");
  for (let value of arr) {
    //console.log(value);
  }
}

//iterateArray(number);

const memArr = [
  "shamshad",
  "asmat",
  "khalida",
  "shahida",
  "fatema",
  "farooq",
  "siddiq",
  "amber",
];

//onsole.log("memArr Length:", memArr.length);

const iterateArray1 = (arrr) => {
  //console.log("using for lp:");
  for (let i = 0; i < arrr.length; i++) {
    //console.log(arrr[i]);
  }

  //console.log("using while lp:");
  let j = 0;
  while (j < arrr.length) {
    //console.log(arrr[j]);
    j++;
  }

  //console.log("using do while lp:");
  let k = 0;
  do {
    //console.log(arrr[k]);
    k++;
  } while (k < arrr.length);

  //console.log("using for in lp:");
  for (let item in arrr) {
    //console.log(arrr[item]);
  }

  //console.log('using for of looopp:')
  for (let item of arrr) {
    //console.log(item)
  }
};

//iterateArray1(memArr);

//----------------------------------------

// map() Non Mutating
//The map() method in JavaScript is used to iterate over an array and transform its elements,
//returning a new array of the same length.
//It is commonly used when you want to apply a function to each element of an array.

const array = ["Home", "About", "Contact Us"];
const newArr = array.map((el) => el);
// const newArr = array.map(function(el){
//   return el
// } )
//console.log("newArr",newArr);

const arrrrr = [1, 23, 4, , 5, 7, 8, 9, 3, 10, 2];

const newArrrrr = arrrrr.map((num) => num);

//console.log('newArrrrr',newArrrrr)

//--------------------------------------------------

let str = "i am Farooq";
//print everey character of above sentence using for..in loop
for (let s in str) {
  //console.log(str[s])
}

//print everey character of above sentence using for..of loop
for (let val of str) {
  //console.log(val)
}

//print everey character of above sentence using for loop
const newSentence = "Hello World!";

for (let i = 0; i < newSentence.length; i++) {
  //console.log(newSentence[i]);
}

//print everey character of above sentence using for loop with function
const sentence = "i am person neither good nor bad";

function prntsentence(ss) {
  for (let i = 0; i < ss.length; i++) {
    //console.log(ss[i]);
  }
}
//prntsentence(sentence);

//print everey character of above sentence while loop
const newSentence1 = "Hello Worldbn!";

let e = 0;
while (e < newSentence1.length) {
  //console.log(newSentence1[e]);
  e++;
}

//print everey character of above sentence while loop with function
const newSentence2 = "Hello Worldv!";

function prtint(ele) {
  let ee = 0;
  while (ee < newSentence2.length) {
    //console.log(ele[ee]);
    ee++;
  }
}

//prtint(newSentence2)

//print everey character of above sentence do while loop
const newSentence3 = "HELLO WORLDDDDD!";
let rr = 0;
do {
  //console.log(newSentence3[rr]);
  rr++;
} while (rr < newSentence3.length);

//print everey character of above sentence do while loop with function

//print everey character of above sentence do while loop
const newSentence4 = "HELLO WORLDDDDDfgbnm!";

function ptAr(v) {
  let rrr = 0;
  do {
    //console.log(v[rrr]);
    rrr++;
  } while (rrr < newSentence4.length);
  //while (rrr < v.length); it is also working
}

//ptAr(newSentence4);
//-------------------------------------------

// JavaScript Object assign() Method

// The Object.assign() method is used to copy the values and properties from one or more source objects
// to a target object. It invokes getters and setters
// since it uses both [[Get]] on the source and [[Set]] on the target.

//Syntax:
//Object.assign(target, ...sources);

//Parameters:
//target: It is the target object to which values and properties have to be copied.
//sources: It is the source object from which values and properties have to be copied.
//Return Value:
//Object.assign() returns the target object.

//Example 1: Merging Objects
const obj1 = {
  a: 1,
  b:2 
};

const obj2 = {
  c: 3,
  d:4
};

const obj3 = {
  e: 5,
  f:6
};

const mergeObj = Object.assign({}, obj1,obj2,obj3)
//console.log(mergeObj)

//Example 2: Overwriting Properties
const obj11 ={
  name:'farooq',
  age:27,
  city:'budaun'
}

const obj12 ={
  Emp:'farooq',
  age:28,
  email:'farooq123@gmail.com'
}

const result = Object.assign({},obj11,obj12)
//console.log(result)

//Example 3: Cloning an Object
const orgObj ={
  W:10,
  x:20,
  y:30,
  z:40
}

const CloningObj = Object.assign({},orgObj)
//console.log(CloningObj)

//Example 4: Adding New Properties

const personObj ={
  name:'Arshi'
}
//console.log(personObj)

const addproptoPersonObj = Object.assign(personObj,{age:'23',city:'budaun',address:'xyz'})

//console.log(addproptoPersonObj)



