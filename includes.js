//includes()

//The includes() method in JavaScript is used to determine if an array contains a specified element. 
//It returns true if the element is found, and false otherwise.

//Syntax
//array.includes(searchElement, fromIndex);

//searchElement: The element to search for in the array.
//fromIndex (Optional): The index to start the search from. The default is 0. 
//If fromIndex is negative, it counts from the end of the array.

//Key Points
//includes() performs a strict equality (===) check, meaning it checks both type and value.
//It’s useful for checking the presence of an element in an array without needing to know its index.
//Returns true if the element is found and false otherwise.

//1. Basic Usage
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('orange')); // Output: false

//2. Using fromIndex Parameter
const numbers = [1, 2, 3, 4, 5, 3];
console.log(numbers.includes(3, 3)); // Output: true
console.log(numbers.includes(3, 5)); // Output: false
