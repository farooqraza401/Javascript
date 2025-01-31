//Higher-order functions

//A Higher-Order Function (HOF) is a function that takes another function as an argument or returns a function.
//Higher-order functions make JavaScript more powerful and enable functional programming techniques!

//Higher-Order Function	                          Purpose
//map()	                                          Transforms each element in an array
//filter()	                                      Filters elements based on a condition
//reduce()	                                      Reduces an array to a single value
//forEach()	                                      Executes a function for each element
//Custom HOF	                                  Can take or return functions dynamically

//Example1: A Function Taking Another Function as an Argument
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Gooobye!");
}

// Passing 'sayGoodbye' function as an argument
greet("Alice", sayGoodbye);

//output
//Hello, Alice
//Goodbye!

//Example2: A Function Returning Another Function
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

// Create functions with predefined factors
const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

//Example3: Built-in Higher-Order Functions in JavaScript
//map():
//map() – Transform Each Element
//const numbers = [1, 2, 3, 4, 5];
//const squared = numbers.map(num => num * num);
//console.log(squared); // Output: [1, 4, 9, 16, 25]
// Note - map() applies the function to each element and returns a new array.

//filter():
//filter() – Select Elements Based on a Condition
//const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
// Note - filter() returns a new array with only elements that pass the test.

//reduce():
//reduce() – Accumulate Values into a Single Result
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
// Note - reduce() accumulates a value by applying the function to each element.

//forEach():
//forEach() – Perform an Action for Each Element
const names = ["Alice", "Bob", "Charlie"];
names.forEach((name) => console.log("Hello, " + name));

//Output:
//Hello, Alice
//Hello, Bob
//Hello, Charlie
//forEach() loops through an array but does not return a new array.

//Example4. Custom Higher-Order Function Example
function applyOperation(arr, operation) {
  return arr.map(operation);
}

function square(num) {
  return num * num;
}

console.log(applyOperation([1, 2, 3], square)); // Output: [1, 4, 9]
// Here, applyOperation() accepts an array and a function to apply to each element.
