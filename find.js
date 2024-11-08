//find()- Non Mutating

//The find() method in JavaScript is used to search an array for an element that meets a specific condition.
//It returns the first element that satisfies the provided testing function.
//If no element matches the condition, it returns undefined.

//key points
//find() only returns the first match. If multiple elements satisfy the condition, it stops and returns the first one it finds.
//It does not modify the original array.
//find() returns undefined if no elements match the condition.

/// EX - Finding an object in an array of objects

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const x = users.find(x => x.id === 3)
//console.log(x); // { id: 3, name: 'Charlie' }

// EX - Finding a number in an array

const numbers = [5, 12, 8, 130, 44];

const y = numbers.find(y => y > 170)
console.log(y); // 130


