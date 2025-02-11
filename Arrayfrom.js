//Array.from() in JavaScript
// Array.from() is a built-in JavaScript method that creates a new array
// from an iterable object (like arrays, strings, sets, or objects with a length property).

//Summary
// Feature	                                          Example
// Convert string to array	                          Array.from("Hello") → ['H', 'e', 'l', 'l', 'o']
// Convert  Set to array	                          Array.from(new Set([1,2,2,3])) → [1,2,3]
// Create numeric array	                              Array.from({ length: 5 }, (_, i) => i + 1) → [1,2,3,4,5]
// Convert NodeList	                                  Array.from(document.querySelectorAll("div"))

// 1. Basic Syntax
// Array.from(arrayLike, mapFunction)
// arrayLike → An iterable object (e.g., array-like object, string, or set).
// mapFunction (optional) → A function to apply to each element.

// 2. Creating Arrays from Different Inputs

// Example 1: Convert a String to an Array
// const str = "Hello";
// const arr = Array.from(str);
// console.log(arr);
// Output: ['H', 'e', 'l', 'l', 'o']
// Note-Breaks the string into individual characters.

// Example 2: Convert a Set to an Array
// const set = new Set([1, 2, 3, 4, 4]);
// const arr = Array.from(set);
// console.log(arr);
// Output: [1, 2, 3, 4]
// Note-Removes duplicates automatically because Sets store unique values.

// Example 3: Convert a NodeList (HTML Collection) to an Array
// const divs = document.querySelectorAll("div");
// const arr = Array.from(divs);
// console.log(arr);  // not working
// Output: Converts NodeList to a real array.
// Note-Allows array methods like map(), filter(), and forEach().   // not working

// 3. Using Array.from() with a Mapping Function

// Example 4: Generate an Array of Numbers
// const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log(numbers);
// Output: [1, 2, 3, 4, 5]
// Note-Creates [1, 2, 3, 4, 5] without using a loop.

// Example 5: Create an Array of Squares
// const squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
// console.log(squares);
// Output: [1, 4, 9, 16, 25]
// Note-Each index is squared.

// 4. Alternative: Using Array.keys()
// const numbers = [...Array(5).keys()];
// console.log(numbers);
// Output: [0, 1, 2, 3, 4]
// Note-Faster for simple sequences but doesn't support a mapping function.

//5. Real-World Use Cases

//Shuffling a Range of Numbers
// const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
// console.log(randomNumbers);
// Output: [34, 78, 23, ...] (random numbers)

// Creating Dummy Data for Testing
// const users = Array.from({ length: 3 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}` }));
// console.log(users);
/*
Output:
[
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' }
]
*/
