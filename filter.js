//filter() Non Mutating

// The filter() method creates a new array containing elements that pass a given condition.

// Key Points About filter():
// It doesn’t mutate the original array.
// Returns a new array with elements that satisfy the condition.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

//----------------------

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
  ];
  
  const adults = users.filter(user => user.age >= 18);
  
  console.log(adults); 
  // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
  