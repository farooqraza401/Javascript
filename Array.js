// What is an array in JavaScript?

// An array is a special type of object used to store multiple values in a single variable.
// Arrays can hold any combination of data types, including numbers, strings, objects, and even other arrays.

// How do you create an array?
// You can create an array using the array literal syntax or the Array constructor.

// The array literal syntax uses square brackets to enclose a comma-separated list of values.
// Example: const fruits = [“apple”, “banana”, “cherry”];

// What is the Array constructor?
// The Array constructor creates an array by using the new Array() syntax.
// Example: const fruits = new Array(“apple”, “banana”, “cherry”);

// Basic Operations on JavaScript Arrays

// 1. Accessing Elements of an Array
// Any element in the array can be accessed using the index number.
let a = ["HTML", "CSS", "JS"];

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
//a[1]= "Bootstrap";
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
c.splice(1, 2);
console.log("After Removing 2 elements starting from index 1:" +c)


console.log()













    