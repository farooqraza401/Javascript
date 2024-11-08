//findIndex()

//The findIndex() method in JavaScript is used to find the index of the first element in an array 
//that meets a specified condition (based on a testing function). If no elements satisfy the condition, it returns -1.

//Key Points
//findIndex() executes the callback function for each element in the array until it finds an element that returns true for the specified condition.
//It returns the index of the first matching element, or -1 if no element matches the condition.

//1. Basic Usage
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(element => element > 5);

//console.log(index); // Output: 1

//2. Using findIndex() with an Array of Objects
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' }
];
const indx = users.findIndex(user => user.name === 'Jane');

console.log(indx); // Output: 1

