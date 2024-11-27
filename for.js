// A for loop in JavaScript is used to repeat a block of code a specific number of times.
//It is one of the most common control structures in programming.

//Syntax
// for (initialization; condition; increment / decrement) {
// Code to execute repeatedly
// }

// Example 1: Simple Counting
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// Example 2: Iterating Backwards
for (let i = 5; i > 0; i--) {
  console.log(i); // Output: 5, 4, 3, 2, 1
}

//Example 3: Iterating Over an Array
const fruits = ["apple", "banana", "cherry"];
//console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // Output:
  // apple
  // banana
  // cherry
}
