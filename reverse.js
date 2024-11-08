 //reverse()- Mutating

//The reverse() method in JavaScript is used to reverse the order of elements in an array. 
//It modifies the original array, changing the positions of the elements so that the first becomes the last, 
//the second becomes the second-to-last, and so on.

//Syntax
//array.reverse();

//The reverse() method does not take any arguments.
//It modifies the original array and returns the reversed array.

//1. Basic Usage
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();

//console.log(numbers); // Output: [5, 4, 3, 2, 1]

//2. Reversing an Array of Strings
const words = ['one', 'two', 'three', 'four'];
words.reverse();

//console.log(words); // Output: ['four', 'three', 'two', 'one']

//3. Returning the Reversed Array
const letters = ['a', 'b', 'c', 'd'];
const reversedLetters = letters.reverse();

//console.log(reversedLetters); // Output: ['d', 'c', 'b', 'a']
//console.log(letters);         // Output: ['d', 'c', 'b', 'a']

