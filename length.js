// length Property in JavaScript :

// In JavaScript, .length is used to get the number of elements in an array, 
// the number of characters in a string, or the number of properties in an object (indirectly).

//Ex1.Length of a String
//The .length property returns the number of characters in a string (including spaces).
const str = "Hello, World!";
//console.log(str.length); // Output: 13

//Ex2.Length of an Array
//The .length property returns the number of elements in an array.
const numbers = [10, 20, 30, 40, 50];
//console.log(numbers.length); // Output: 5

//Ex3.Modifying Array Length
numbers.length = 3;
//console.log(numbers); // Output: [10, 20, 30] (Trims the array)


//Ex4.Length of an Object (Indirect)
//syntax
//Object.keys(Obj).length

//Objects don’t have a length property by default, but we can use Object.keys() to get the number of properties.
const person = { name: "John", age: 25, city: "New York" };
//Fconsole.log(Object.keys(person).length); // Output: 3


//Ex5.Length of an Empty String or Array
//console.log("".length); // Output: 0
//console.log([].length); // Output: 0

