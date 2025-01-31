// The reduce() method in JavaScript reduces an array to a single value by applying a function to each element.
// It is commonly used for summing values, finding maximum/minimum, flattening arrays, and more!

// Syntax of reduce()
// array.reduce((accumulator, currentValue, index, array) => {
//     // Perform operation
//     return newAccumulator;
// }, initialValue);

// Parameters
// accumulator → Stores the result of previous iterations.
// currentValue → The current element being processed.
// index (optional) → The index of currentValue.
// array (optional) → The full array.
// initialValue (optional, but recommended) → The starting value of accumulator.

//Example1: Sum of an Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

//console.log(sum); // Output: 15

//Example2: Find Maximum Value
//const numbers = [10, 25, 40, 5, 60];
const maxNumber = numbers.reduce(
  (max, num) => (num > max ? num : max),
  numbers[0]
);
//console.log(maxNumber); // Output: 60

//Example3: Count Occurrences in an Array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

//console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }

//Example4: Flatten an Array (Convert 2D to 1D)
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

//Example: Calculate Total Price in a Shopping Cart
const cart = [
  { item: "Laptop", price: 1000 },
  { item: "Phone", price: 500 },
  { item: "Headphones", price: 100 },
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);

// console.log(totalPrice); // Output: 1600

// ---------------
//Practice :
////Example1: Multiply of an Array
//reduces an array to a single value by applying a function to each element.
const num = [1, 2, 3, 4];
const re = num.reduce((a, b) => a * b);
console.log(re); //24
