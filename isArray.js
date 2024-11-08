//The Array.isArray() method in JavaScript is used to determine if a given value is an array. 
//It returns true if the value is an array, and false otherwise.

//Syntax
//Array.isArray(value);

//value: The value you want to check.

//1. Checking if a Value is an Array
//console.log(Array.isArray([1, 2, 3]));         // Output: true
//console.log(Array.isArray('hello'));           // Output: false
//console.log(Array.isArray({ a: 1, b: 2 }));    // Output: false
//console.log(Array.isArray(null));              // Output: false
//console.log(Array.isArray(undefined));         // Output: false

//2. Checking Nested Arrays
const nestedArray = [1, [2, 3], 4];
//console.log(Array.isArray(nestedArray));      // Output: true
//console.log(Array.isArray(nestedArray[1]));   // Output: true
//console.log(Array.isArray(nestedArray[0]));   // Output: false



