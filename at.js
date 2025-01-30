//.at() Method in JavaScript

//.at() Method in JavaScript
//The .at() method is used to access an element at a specific index in an array or string. It supports negative indexing, making it useful for getting elements from the end.

// Introduced in: ES2022
// Works with: Arrays & Strings
// Supports Negative Indexing

//Ex1. at() with Arrays

const numbers = [10, 20, 30, 40, 50];
//console.log(numbers.at(0));  // Output: 10   (First element)
//console.log(numbers.at(2));  // Output: 30   (Third element)
//console.log(numbers.at(-1)); // Output: 50   (Last element)
//console.log(numbers.at(-2)); // Output: 40   (Second last element)

//Without .at(), we typically use array.length - 1
//console.log(numbers[numbers.length - 1]); // Output: 50
 // Note- Use .at(-1) instead of arr[arr.length - 1] for better readability!
 // console.log(numbers.at(-1)); // Output: 50


//Ex2. at() with Strings
const text = "JavaScript";
//console.log(text.at(0));  // Output: "J"  (First character)
//console.log(text.at(4));  // Output: "S"  (Fifth character)
//console.log(text.at(-1)); // Output: "t"  (Last character)
//console.log(text.at(-3)); // Output: "i"  (Third last character)

//Ex3.at() with Empty Arrays or Out-of-Bounds Index
const emptyArray = [];
//console.log(emptyArray.at(0)); // Output: undefined

const nums = [1, 2, 3];
//console.log(nums.at(10)); // Output: undefined (Index out of range)
//console.log(nums.at(-10)); // Output: undefined (Negative index out of range)

//----------------------------------------------------------------------------
//undefined in JavaScript
//In JavaScript, undefined means a variable has been declared but has not been assigned a value. 
// It is also the default return value for functions or object properties that do not exist.
