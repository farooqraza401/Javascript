// What is Destructuring in JavaScript?
// Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects into variables in a simpler way.

// Feature	           Array Destructuring	                  Object Destructuring
// Syntax	             [a, b] = array	                         {x, y} = object
// Skipping Values	          Yes	                                    No
// Default Values	            Yes	                                    Yes
// Renaming Variables	        No	                          Yes (property: newName)
// Function Parameters	      Yes	                                   Yes
//

// Destructuring Arrays
// Extract values from an array into separate variables.
// Example 1: Basic Array Destructuring
const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Example 2: Skipping Values
const numberss = [10, 20, 30, 40];

const [first, , third] = numberss;

console.log(first); // 10
console.log(third); // 30

// Example 3: Default Values
const colors = ["red"];

const [firstColor, secondColor = "blue"] = colors;

console.log(firstColor); // red
console.log(secondColor); // blue (default value is used)

// Destructuring Objects
// Extract values from an object into variables.

// Example 1: Basic Object Destructuring
const person = { name: "Alice", age: 25 };

const { name, age } = person;

console.log(name); // Alice
console.log(age); // 25

// Example 2: Using a Different Variable Name
const user = { username: "JohnDoe", email: "john@example.com" };

const { username: userName, email: userEmail } = user;

console.log(userName); // JohnDoe
console.log(userEmail); // john@example.com

// Example 3: Default Values
const product = { title: "Laptop" };

const { title, price = 1000 } = product;

console.log(title); // Laptop
console.log(price); // 1000 (default value used)

// Destructuring in Function Parameters
// Example 1: Function with Object Destructuring
function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const userr = { name: "Bob", age: 28 };
printUser(userr); // Output: Name: Bob, Age: 28

// Example 2: Function with Default Values
function greet({ name = "Guest" }) {
  console.log(`Hello, ${name}!`);
}

greet({ name: "Alice" }); // Hello, Alice!
greet({}); // Hello, Guest!

// Nested Destructuring
// Example: Extracting from Nested Objects
const student = {
  namee: "Emma",
  subjects: {
    math: 90,
    science: 85,
  },
};

const {
  namee,
  subjects: { math, science },
} = student;

console.log(namee); // Emma
console.log(math); // 90
console.log(science); // 85
